export interface UiCommon {
  asBoolean: string | boolean;
  asNumber: string | number;
  size: 'small' | 'medium' | 'large';
  rounded: 'no' | 'small' | 'medium' | 'large';
  color: (
    'primary-dark' |
    'primary-mid-dark' |
    'primary' |
    'primary-mid-light' |
    'primary-light' |
    'secondary-dark' |
    'secondary-mid-dark' |
    'secondary' |
    'secondary-mid-light' |
    'secondary-light' |
    'grey-dark' |
    'grey-mid-dark' |
    'grey' |
    'grey-mid-light' |
    'grey-light'
  );
}
