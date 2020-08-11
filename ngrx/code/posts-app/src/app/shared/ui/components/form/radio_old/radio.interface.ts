import { UiCommon } from 'src/app/shared/ui/models/common.interface';

export interface UiFormRadio {
  id: string;
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
  inline: UiCommon['asBoolean'];
}
