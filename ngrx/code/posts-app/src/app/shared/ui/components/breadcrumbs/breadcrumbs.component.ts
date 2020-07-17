import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { UiBreadcrumbs } from './breadcrumbs.interface';

@Component({
  selector: 'ui-breadcrumbs',
  styleUrls: ['./breadcrumbs.component.scss'],
  templateUrl: './breadcrumbs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiBreadcrumbsComponent implements UiBreadcrumbs {

  @Input() links: UiBreadcrumbs['links'] = [];
}
