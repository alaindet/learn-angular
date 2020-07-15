import { UiCommon } from 'src/app/shared/ui/common/models/common.interface';

export interface UiButton {
  color: (
    'primary' |
    'secondary' |
    'primary-outline' |
    'secondary-outline'
  );
  size: UiCommon['size'];
  type: 'button' | 'submit';
  isDisabled: UiCommon['asBoolean'];
  isUppercase: UiCommon['asBoolean'];
  isCircle: UiCommon['asBoolean'];
  hasMargin: UiCommon['asBoolean'];
  hasIcon: UiCommon['asBoolean'];
  hasFullWidth: UiCommon['asBoolean'];
  hasSlots: UiCommon['asBoolean'];
}
