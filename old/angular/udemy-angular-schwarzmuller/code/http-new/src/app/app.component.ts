import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewBlogPost } from './models/new-blog-post.model';
import { BlogPost } from './models/blog-post.model';
import { BlogPostsService } from './services/blog-posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  public blogPosts: BlogPost[] = [];
  public isLoading = false;
  public error = null;
  private subs: SubscriptionsDictionary = {};

  constructor(
    private blogPostsService: BlogPostsService
  ) {}

  public ngOnInit(): void {
    this.subs.error = this.blogPostsService.error.subscribe(
      (errorMessage: string) => {
        this.error = errorMessage;
      }
    );

    this.isLoading = true;
    this.subs.initPosts = this.blogPostsService.readPosts()
      .subscribe(
        (blogPosts: BlogPost[]) => {
          console.log('Initializing...', blogPosts);
          this.isLoading = false;
          this.blogPosts = blogPosts;
        },
        (error: Error) => {
          console.log('Error...', error);
          this.blogPostsService.error.next(error.message);
        }
      );
  }

  public ngOnDestroy(): void {
    Object.values(this.subs).forEach(sub => sub.unsubscribe());
  }

  public onCreatePost(blogPost: NewBlogPost): void {
    this.subs.createPost = this.blogPostsService.createPost(blogPost)
      .subscribe(
        (response: FirebaseWriteResponse) => {
          console.log('Creating...', response);
          this.onReadPosts();
        }
      );
  }

  public onReadPosts(): void {
    this.subs.readPosts = this.blogPostsService.readPosts()
      .subscribe(
        (blogPosts: BlogPost[]) => {
          console.log('Reading...', blogPosts);
          this.isLoading = false;
          this.blogPosts = blogPosts;
        },
        (error: Error) => {
          console.log('Error...', error);
          this.blogPostsService.error.next(error.message);
        }
      );
  }

  public onDeletePosts(): void {
    this.subs.deletePosts = this.blogPostsService.deletePosts()
      .subscribe(
        (response: FirebaseWriteResponse) => {
          console.log('Deleting...', response);
          this.onReadPosts();
        }
      );
  }

  public onHandleError(): void {
    console.log('Dismissing the error...');
    this.isLoading = false;
    this.error = null;
  }
}

interface SubscriptionsDictionary {
  [key: string]: Subscription;
}

interface FirebaseWriteResponse {
  name: string;
}

interface FirebaseReadResponse {
  [key: string]: NewBlogPost;
}
