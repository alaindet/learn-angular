import { UiCommon } from 'src/app/shared/ui/models/common.interface';

export interface UiFormCheckbox {
  size: UiCommon['size'];
  color: (
    | 'primary'
    | 'secondary'
  );
  shape: (
    | 'square'
    | 'round'
    | 'circle'
  );
}
