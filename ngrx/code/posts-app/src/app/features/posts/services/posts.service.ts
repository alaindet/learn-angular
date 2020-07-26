import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PostsApiService } from './posts-api.service';
import { Post } from './../models/post.interface';

@Injectable()
export class PostsService {

  constructor(
    private api: PostsApiService,
  ) {}

  getPosts(): Observable<Post[]> {
    return this.api.getPosts();
  }
}
