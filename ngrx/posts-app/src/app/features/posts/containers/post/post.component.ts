import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

import { UiCoreService } from 'src/app/core/services/ui.service';
import { BreadcrumbLink } from 'src/app/shared/ui/components/breadcrumbs/breadcrumbs.interface';
import { Post } from './../../models/post.interface';
import { PostsService } from './../../services/posts.service';

const PLACEHOLDER_BREADCRUMB = 'Post ...';

@Component({
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostContainerComponent implements OnInit {

  breadcrumbs: BreadcrumbLink[] = [
    { path: '/', label: 'App' },
    { path: '/posts', label: 'Posts' },
    { path: null, label: PLACEHOLDER_BREADCRUMB },
  ];
  post: Post = null;
  private subs: { [sub: string]: Subscription } = {};

  constructor(
    public ui: UiCoreService,
    private route: ActivatedRoute,
    private postsService: PostsService,
  ) {}

  ngOnInit() {
    this.subs.post = this.route.params
      .pipe(
        tap(() => this.ui.setLoading(true)),
        switchMap((params: Params) => {
          const id = params['id'];
          return this.postsService.getPost(id);
        })
      )
      // TODO: Error handling
      .subscribe((post: Post) => {
        this.post = post;
        this.breadcrumbs = this.breadcrumbs.map(
          (breadcrumb: BreadcrumbLink) => {
            return (breadcrumb.label === PLACEHOLDER_BREADCRUMB)
              ? { ...breadcrumb, label: `Post #${post.id}` }
              : breadcrumb;
          }
        );
        this.ui.setLoading(false);
      });
  }
}