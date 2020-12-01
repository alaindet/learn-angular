import { Observable, Subject, Subscription, throwError } from 'rxjs';
import { NewBlogPost } from './../models/new-blog-post.model';
import { BlogPost } from './../models/blog-post.model';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogPostsService {

  private firebaseUrl = 'https://learn-angular-2cb4b.firebaseio.com/';
  public blogPosts = [];
  public error = new Subject<string>();

  constructor(
    private http: HttpClient
  ) {}

  createPost(newBlogPost: NewBlogPost): Observable<FirebaseWriteResponse> {
    const url = `${this.firebaseUrl}/posts.json`;
    return this.http
      .post<FirebaseWriteResponse>(url, newBlogPost);
  }

  readPosts(): Observable<BlogPost[]> {
    const url = `${this.firebaseUrl}/posts.json`;
    const httpHeaders = new HttpHeaders({
      'Custom-Header-1': 'ch1',
      'Custom-Header-2': 'ch2',
    });
    let httpQueryParams = new HttpParams();
    httpQueryParams = httpQueryParams.append('par1', 'val1');
    httpQueryParams = httpQueryParams.append('par2', 'val2');
    const options = {
      headers: httpHeaders,
      params: httpQueryParams
    };
    return this.http
      .get<FirebaseReadResponse>(url, options)
      .pipe(

        // From JSON response to blog posts list
        map(
          (response: FirebaseReadResponse): BlogPost[] => {
            const blogPosts: BlogPost[] = [];
            for (const key in response) {
              const blogPost: BlogPost = {
                id: key,
                ...response[key]
              };
              blogPosts.push(blogPost);
            }
            return blogPosts;
          }
        ),

        // From latest to oldest blog posts
        map(
          (blogPosts: BlogPost[]): BlogPost[] => blogPosts.reverse()
        ),

        // ERROR
        catchError(
          (error) => {
            // Log, send to server, etc.
            return throwError(error);
          }
        )

      );
  }

  // deletePosts(): Observable<FirebaseWriteResponse> {
  deletePosts(): Observable<any> {
    const url = `${this.firebaseUrl}/posts.json`;
    return this.http
      .delete(url, { observe: 'events' })
      .pipe(
        tap(
          event => {
            console.log('Tapping the delete event...');
            switch (event.type) {
              case HttpEventType.Sent:
                console.log('HttpEventType.Sent', event.type);
                break;
              case HttpEventType.UploadProgress:
                console.log('HttpEventType.UploadProgress', event.type);
                break;
              case HttpEventType.ResponseHeader:
                console.log('HttpEventType.ResponseHeader', event.type);
                break;
              case HttpEventType.UploadProgress:
                console.log('HttpEventType.UploadProgress', event.type);
                break;
              case HttpEventType.DownloadProgress:
                console.log('HttpEventType.DownloadProgress', event.type);
                break;
              case HttpEventType.Response:
                console.log('HttpEventType.Response', event.type);
                break;
              case HttpEventType.User:
                console.log('HttpEventType.User', event.type);
                break;
            }
          }
        )
      );
  }
}

interface FirebaseWriteResponse {
  name: string;
}

interface FirebaseReadResponse {
  [key: string]: NewBlogPost;
}
