import { UiCommon } from 'src/app/shared/ui/models/common.interface';

export interface UiTiles {
  tiles: UiCommon['twelfthsAsNumber'];
  tilesMd: UiCommon['twelfthsAsNumber'];
  tilesLg: UiCommon['twelfthsAsNumber'];
  withGaps: UiCommon['sizeNullable'];
}
