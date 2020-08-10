import { UiCommon } from 'src/app/shared/ui/models/common.interface';

export interface UiFormCheckbox {
  size: UiCommon['size'];
  color: (
    | 'primary'
    | 'primary-mid-light'
    | 'secondary'
    | 'secondary-mid-light'
  );
  shape: (
    | 'square'
    | 'round'
    | 'circle'
  );
}
