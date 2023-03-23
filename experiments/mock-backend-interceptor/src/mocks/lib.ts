import { HttpErrorResponse, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export type RequestHandlerFactory<T = any> = (
  urlParams: RouteParams | null,
  store: DataStore,
) => RequestHandler<T>;

export type RequestHandler<T = any> = (req: HttpRequest<T>) => Observable<HttpEvent<T>>;

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type RouteParams = { [param: string]: string };

export type RouteRegex = {
  regex: RegExp;
  paramNames: string[];
};

export type DataStore = { [key: string]: any };

export type RegisteredRoute<T = any> = {
  method: HttpMethod;
  pattern: string;
  patternRegex: RouteRegex | null;
  handler: RequestHandlerFactory<T>;
};

export type MatchedRoute<T = any> = RegisteredRoute<T> & {
  urlParams: RouteParams | null;
};

// TODO: Match route via regex!
export class MockServer {

  private routes: RegisteredRoute[] = [];
  store: DataStore = {};

  constructor(
    public baseUrl: string,
  ) {}

  get<T = any>(pattern: string, handler: RequestHandlerFactory<T>) {
    this.registerRoute('GET', pattern, handler);
  }

  post<T = any>(pattern: string, handler: RequestHandlerFactory<T>) {
    this.registerRoute('POST', pattern, handler);
  }

  put<T = any>(pattern: string, handler: RequestHandlerFactory<T>) {
    this.registerRoute('PUT', pattern, handler);
  }

  patch<T = any>(pattern: string, handler: RequestHandlerFactory<T>) {
    this.registerRoute('PATCH', pattern, handler);
  }

  delete<T = any>(pattern: string, handler: RequestHandlerFactory<T>) {
    this.registerRoute('DELETE', pattern, handler);
  }

  canHandle(url: string): boolean {
    return url.startsWith(this.baseUrl);
  }

  handle<T = any>(req: HttpRequest<T>): Observable<HttpEvent<T>> {

    const route = this.matchRoute(req);

    if (route === null) {
      throw new HttpErrorResponse({
        error: `Route "${req.method.toUpperCase()} ${req.url}" not found`,
        status: 404,
        statusText: 'Not Found',
      });
    }

    const handler = route.handler(route.urlParams, this.store);
    return handler(req);
  }

  private registerRoute<T = any>(
    method: HttpMethod,
    _pattern: string,
    handler: RequestHandlerFactory<T>,
  ): void {
    const pattern = this.normalizePattern(_pattern);
    const patternRegex = this.extractPatternRegex(_pattern);
    const route: RegisteredRoute = { method, pattern, patternRegex, handler};
    this.routes.push(route);
  }

  private normalizePattern(pattern: string): string {
    let result = pattern;

    if (!result.startsWith('/')) {
      result = `/${result}`;
    }

    if (result.endsWith('/')) {
      result = result.slice(0, -1);
    }

    return result;
  }

  private stripUrl(url: string): string {
    let result = url;

    const queryStringIndex = result.indexOf('?');
    if (queryStringIndex !== -1) {
      result = result.slice(0, queryStringIndex);
    }

    const fragmentIndex = result.indexOf('#');
    if (fragmentIndex !== -1) {
      result = result.slice(0, fragmentIndex);
    }

    return result;
  }

  private extractPatternRegex(pattern: string): RouteRegex | null {

    let paramNames: string[] = [];
    let regexSegments: string[] = [];
    let isRegex = false;

    for (const segment of pattern.split('/')) {

      // Empty segment
      if (segment === '') {
        continue;
      }

      // Non-regex segment
      if (!segment.startsWith(':')) {
        regexSegments.push(segment);
        continue;
      }

      // Regex segment
      isRegex = true;
      regexSegments.push(`([^/]+?)`);
      const paramName = segment.slice(1); // ':id' => 'id'
      paramNames.push(paramName);
    }

    if (!isRegex) {
      return null;
    }

    return {
      regex: new RegExp(`/^${regexSegments.join('\\/')}$/gi`),
      paramNames,
    };
  }

  private matchRoute<T = any>(req: HttpRequest<T>): MatchedRoute | null {

    const foundRoute: RegisteredRoute | null = null;
    const method = req.method.toUpperCase();
    const url = this.stripUrl(req.url.replace(this.baseUrl, ''));

    for (const route of this.routes) {

      if (route.method.toUpperCase() !== method) {
        continue;
      }

      // Simple pattern
      if (!route.patternRegex) {
        if (route.pattern === url) {
          return { ...route, urlParams: null };
        }
        continue;
      }

      // Regex pattern
      const urlParams: MatchedRoute['urlParams'] = {};
      const matches = [...route.pattern.matchAll(route.patternRegex.regex)];

      // TODO: use match() instead of matchAll()?
      matches.forEach(match => {
        match.slice(1).forEach((value, i) => {
          const paramName = route.patternRegex!.paramNames[i];
          urlParams[paramName] = value;
        });
      });

      return { ...route, urlParams };
    }

    return foundRoute;
  }
}
