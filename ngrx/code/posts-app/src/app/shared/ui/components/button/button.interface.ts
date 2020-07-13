import { UiCommon } from './../../common/models/common.interface';

export interface UiButton {
  color: (
    'primary' |
    'secondary' |
    'primary-outline' |
    'secondary-outline'
  );
  size: UiCommon['size'];
  type: 'button' | 'submit';
  isDisabled: UiCommon['booleanish'];
  isUppercase: UiCommon['booleanish'];
  hasMargin: UiCommon['booleanish'];
  hasIcon: UiCommon['booleanish'];
  hasFullWidth: UiCommon['booleanish'];
  noPadding: UiCommon['booleanish'];
}
