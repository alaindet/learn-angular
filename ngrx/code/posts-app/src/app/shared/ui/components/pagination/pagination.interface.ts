import { UiCommon } from 'src/app/shared/ui/models/common.interface';

export interface UiPagination {
  current: UiCommon['asNumber'];
  total: UiCommon['asNumber'];
  show: UiCommon['asNumber'];
  simple: UiCommon['asBoolean'];
  color: 'primary' | 'secondary';
}
