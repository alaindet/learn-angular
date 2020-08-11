import { UiCommon } from './../../../models/common.interface';

export interface UiFormRadioOption {
  id: string;
  value: string;
  label: string;
}

export interface UiFormRadio {
  options: UiFormRadioOption[];
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

export interface UiFormRadioEvents {
  selected: string;
}
