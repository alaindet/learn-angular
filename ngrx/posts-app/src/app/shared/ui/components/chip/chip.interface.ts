import { UiCommon } from './../../models/common.interface';

export interface UiChip {
  size: UiCommon['size'];
  color: UiCommon['color'];
  dismissable: UiCommon['asBoolean'];
}
