import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PostsApiService } from './posts-api.service';
import { Post } from './../models/post.interface';

@Injectable()
export class PostsService {

  constructor(
    private api: PostsApiService,
  ) {}

  getPost(id: string): Observable<Post> {
    return this.api.getPost(id);
  }

  getPosts(page = 1): Observable<Post[]> {
    return this.api.getPosts(page);
  }
}
