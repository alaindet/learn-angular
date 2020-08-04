import { UiCommon } from 'src/app/shared/ui/common/models/common.interface';

export interface UiGhostRectangle {
  width?: string;
  height?: string;
  ratio?: (
    '16:9' |
    '1:1' |
    '4:3' |
    '3:4'
  );
  rounded: UiCommon['rounded'];
}
