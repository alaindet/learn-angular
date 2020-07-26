import { UiCommon } from './../../../common/models/common.interface';

export interface UiRow {
  noWrap: UiCommon['asBoolean'];
  withGutters: UiCommon['asBoolean'];
  justify: (
    | 'start'
    | 'center'
    | 'end'
    | 'between'
    | 'around'
    | 'evenly'
  );
}
