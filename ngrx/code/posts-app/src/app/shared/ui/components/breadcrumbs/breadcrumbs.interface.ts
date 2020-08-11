import { NavigationExtras } from '@angular/router';

import { UiCommon } from './../../models/common.interface';

type BasicBreadcrumbPath = string;

type AdvancedBreadcrumbPath = {
  segments: any[];
  extra: NavigationExtras,
};

export interface BreadcrumbLink {
  path: BasicBreadcrumbPath | AdvancedBreadcrumbPath;
  label: string;
  asBack?: boolean;
}

export interface UiBreadcrumbs {
  links: BreadcrumbLink[];
  withBack?: UiCommon['asBoolean'];
}
