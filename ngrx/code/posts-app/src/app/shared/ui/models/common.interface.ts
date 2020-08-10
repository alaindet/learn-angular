export interface UiCommon {
  asBoolean: string | boolean;
  asNumber: string | number;
  size: (
    | 'small'
    | 'medium'
    | 'large'
  );
  sizeAbbreviation: (
    | 'sm'
    | 'md'
    | 'lg'
  );
  sizeNullable: (
    | 'no'
    | 'small'
    | 'medium'
    | 'large'
  );
  twelfthsAsNumber: (
    | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
    |  1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  |  9  |  10  |  11  |  12
  );
  color: (
    | 'primary-dark'
    | 'primary-mid-dark'
    | 'primary'
    | 'primary-mid-light'
    | 'primary-light'
    | 'secondary-dark'
    | 'secondary-mid-dark'
    | 'secondary'
    | 'secondary-mid-light'
    | 'secondary-light'
    | 'grey-dark'
    | 'grey-mid-dark'
    | 'grey'
    | 'grey-mid-light'
    | 'grey-light'
  );
}

export interface UiCommonEvents {
  dismissing: {
    animation: () => void;
    delay: number;
  };
}
