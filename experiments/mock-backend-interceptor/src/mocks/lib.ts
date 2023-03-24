import { HttpErrorResponse, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export type RouteParams = { [param: string]: string };

export type RequestHandlerFactory<T = any> = (
  urlParams: RouteParams | null,
  store: DataStore,
) => RequestHandler<T>;

export type RequestHandler<T = any> = (
  req: HttpRequest<T>,
) => Observable<HttpEvent<T>>;

export type HttpMethod = (
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'DELETE'
);

export type DataStore = { [key: string]: any };

export type StaticRegisteredRoute<T = any> = {
  method: HttpMethod;
  pattern: string;
  handler: RequestHandlerFactory<T>;
};

export type RegexRegisteredRoute<T = any> = StaticRegisteredRoute<T> & {
  regex: RegExp;
  paramNames: string[];
};

export type RegisteredRoute<T = any> = (
  | StaticRegisteredRoute<T>
  | RegexRegisteredRoute<T>
);

export type StaticMatchedRoute = StaticRegisteredRoute;

export type RegexMatchedRoute = RegexRegisteredRoute & {
  data: RouteParams;
};

export type MatchedRoute = (
  | StaticMatchedRoute
  | RegexMatchedRoute
);

export class MockServer {

  private routes: RegisteredRoute[] = [];
  private baseUrl: string;
  store: DataStore = {};

  constructor(baseUrl: string) {
    this.baseUrl = this.sanitizeBaseUrl(baseUrl);
  }

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

    const t = Date.now();
    console.log(`[MockServer] (${t}) - `, req.method, req.url);

    const method = req.method as HttpMethod;
    const pattern = this.extractPatternFromUrl(req.url);
    const route = this.matchRoute(method, pattern);

    if (route === null) {
      throw new HttpErrorResponse({
        error: `Route "${req.method.toUpperCase()} ${req.url}" not found`,
        status: 404,
        statusText: 'Not Found',
      });
    }

    const regexRoute = route as RegexMatchedRoute;

    const handler = (regexRoute?.regex)
      ? route.handler(regexRoute.data, this.store)
      : route.handler({}, this.store);

    const res = handler(req);

    return res;
  }

  private matchRoute(method: HttpMethod, pattern: string): MatchedRoute | null {

    for (const route of this.routes) {

      // This is the wrong castle
      if (route.method !== method) {
        continue;
      }

      const regexRoute = route as RegexRegisteredRoute;

      // Regex route?
      if (regexRoute?.regex) {
        const { regex, paramNames } = route as RegexRegisteredRoute;
        const matches = [...pattern.matchAll(regex)];

        if (!!matches.length) {

          const data: RouteParams = {};
          matches.forEach(match => {
            match.slice(1).forEach((routeParamValue, i) => {
              data[paramNames[i]] = routeParamValue;
            });
          });

          return { ...regexRoute, data };
        }
        continue;
      }

      // Static route
      if (route.pattern === pattern) {
        return route;
      }
    }

    return null;
  }

  private registerRoute<T = any>(
    method: HttpMethod,
    _pattern: string,
    handler: RequestHandlerFactory<T>,
  ): void {
    const pattern = this.normalizePattern(_pattern);

    // Regex route?
    if (pattern.match(/\/\:/)) {
      const [regex, paramNames] = this.parseRegexRoute(pattern);
      this.routes.push({ method, pattern, handler, regex, paramNames });
      return;
    }

    // Static route
    this.routes.push({ method, pattern, handler });
  }

  private parseRegexRoute(pattern: string): [RegExp, string[]] {

    const regexSegments: string[] = [];
    const paramNames: string[] = [];
    const segments = pattern.split('/').filter(s => s !== '');

    for (const segment of segments) {

      // Regex segment?
      if (segment[0] === ':') {
        paramNames.push(segment.slice(1)); // ':id' => 'id'
        regexSegments.push(`([^\/]+?)`);
        continue;
      }

      // Static segment
      regexSegments.push(segment);
    }

    const regex = `^\/${regexSegments.join('/')}$`;

    return [new RegExp(regex, 'gi'), paramNames];
  }

  // Ex.:
  // normalizePattern('/todos') => '/todos'
  // normalizePattern('todos') => '/todos'
  // normalizePattern('todos/') => '/todos'
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

  // Ex.:
  // extractPatternFromUrl('https://xmpl.com/todos/123?hello#there') => '/todos/123'
  private extractPatternFromUrl(pattern: string): string {
    let result = pattern;

    if (pattern.startsWith(this.baseUrl)) {
      result = result.replace(this.baseUrl, '');
    }

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

  // Removes trailing slashes
  private sanitizeBaseUrl(baseUrl: string): string {
    return baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  }

  // private extractPatternRegex(pattern: string): RouteRegex | null {

  //   let paramNames: string[] = [];
  //   let regexSegments: string[] = [];
  //   let isRegex = false;

  //   for (const segment of pattern.split('/')) {

  //     // Empty segment
  //     if (segment === '') {
  //       continue;
  //     }

  //     // Non-regex segment
  //     if (!segment.startsWith(':')) {
  //       regexSegments.push(segment);
  //       continue;
  //     }

  //     // Regex segment
  //     isRegex = true;
  //     regexSegments.push(`([^/]+?)`);
  //     const paramName = segment.slice(1); // ':id' => 'id'
  //     paramNames.push(paramName);
  //   }

  //   if (!isRegex) {
  //     return null;
  //   }

  //   return {
  //     regex: new RegExp(`^${regexSegments.join('\\/')}$`, 'gi'),
  //     paramNames,
  //   };
  // }

  // private matchRoute<T = any>(req: HttpRequest<T>): MatchedRoute | null {

  //   const foundRoute: RegisteredRoute | null = null;
  //   const method = req.method.toUpperCase();
  //   const url = this.stripUrl(req.url.replace(this.baseUrl, ''));

  //   for (const route of this.routes) {

  //     if (route.method.toUpperCase() !== method) {
  //       continue;
  //     }

  //     // Simple pattern
  //     if (!route.patternRegex) {
  //       if (route.pattern === url) {
  //         return { ...route, urlParams: null };
  //       }
  //       continue;
  //     }

  //     // Regex pattern
  //     const urlParams: MatchedRoute['urlParams'] = {};
  //     const matches = [...route.pattern.matchAll(route.patternRegex.regex)];

  //     // TODO: use match() instead of matchAll()?
  //     matches.forEach(match => {
  //       match.slice(1).forEach((value, i) => {
  //         const paramName = route.patternRegex!.paramNames[i];
  //         urlParams[paramName] = value;
  //       });
  //     });

  //     return { ...route, urlParams };
  //   }

  //   return foundRoute;
  // }
}
