import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

import { UiCoreService } from 'src/app/core/services/ui.service';
import { PostsService } from './../../services/posts.service';
import { Post } from './../../models/post.interface';
import { UiCardEvents } from './../../../../shared/ui/components/card/card.interface';

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsContainerComponent implements OnInit, OnDestroy {

  page: number;
  posts: Post[] = [];
  subs: { [sub: string]: Subscription } = {};

  constructor(
    public ui: UiCoreService,
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.subs.fetchedPosts = this.route.queryParams
      .pipe(
        tap(() => this.ui.setLoading(true)),
        switchMap((params: Params) => {
          const page = params['page'] || 1;
          this.page = +page;
          return this.postsService.getPosts(page);
        })
      )
      // TODO: Error handling
      .subscribe((posts: Post[]) => {
        this.posts = posts;
        this.ui.setLoading(false);
      });
  }

  ngOnDestroy() {
    for (const sub in this.subs) {
      this.subs[sub].unsubscribe();
    }
  }

  onShowPost(id: string) {
    this.router.navigate(['/posts', id]);
  }

  onChangePage(page: number) {
    this.router.navigate(['/posts'], { queryParams: { page } });
  }

  onRemovePost(dismissing: UiCardEvents['dismissing'], id: string) {

    // TODO: Add confirmation modal?
    if (!confirm('Are you sure?')) {
      return;
    }

    dismissing.animation();
    setTimeout(() => this.removePost(id), dismissing.delay);
  }

  // Just filter them out, do not remove them on the database
  private removePost(id: string) {
    const _id = +id;
    this.posts = this.posts.filter((post: Post) => post.id !== _id);
  }
}
