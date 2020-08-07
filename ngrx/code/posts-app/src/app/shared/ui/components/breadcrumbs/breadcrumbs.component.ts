import { Component, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { UiBreadcrumbs } from './breadcrumbs.interface';
import { toBoolean } from './../../functions/to-boolean.function';

@Component({
  selector: 'ui-breadcrumbs',
  styleUrls: ['./breadcrumbs.component.scss'],
  templateUrl: './breadcrumbs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiBreadcrumbsComponent implements UiBreadcrumbs, OnChanges {

  @Input() links: UiBreadcrumbs['links'] = [];
  @Input() withBack: UiBreadcrumbs['withBack'] = false;
  isHistory: boolean;

  constructor(
    private location: Location,
    private router: Router,
  ) {}

  ngOnChanges() {
    this.withBack = toBoolean(this.withBack);
    this.isHistory = this.router.navigated;
  }

  onGoBack() {
    if (this.router.navigated) {
      this.location.back();
    }
  }
}
