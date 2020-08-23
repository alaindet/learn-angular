import { UiCommon } from './../../../models/common.interface';

export interface UiFormRadioOption {
  id?: string;
  value: string;
  label: string;
}

export interface UiFormRadio {
  options: UiFormRadioOption[];
  size: UiCommon['size'];
  name: string;
  color: (
    | 'primary'
    | 'secondary'
  );
  shape: (
    | 'square'
    | 'round'
    | 'circle'
  );
  spacing: UiCommon['size'];
  inline: UiCommon['asBoolean'];
}

export interface UiFormRadioEvents {
  selected: string;
}
