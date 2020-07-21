import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { UiCoreService } from 'src/app/core/services/ui.service';
import { PostsService } from './../../services/posts.service';
import { Post } from './../../models/post.interface';

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsContainerComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  subs: { [sub: string]: Subscription } = {};

  constructor(
    public ui: UiCoreService,
    private postsService: PostsService,
  ) {}

  ngOnInit() {
    this.ui.setLoading(true);
    this.subs.posts = this.postsService.getPosts()
      .subscribe((users: Post[]) => {
        this.posts = users;
        this.ui.setLoading(false);
      })
  }

  ngOnDestroy() {
    for (const sub of Object.values(this.subs)) {
      sub.unsubscribe();
    }
  }

  onShowPost(index: number) {
    console.log('onShowPost', index);
  }
}
