import { UiCommon } from 'src/app/shared/ui/models/common.interface';

export interface UiCard {
  fullHeight?: UiCommon['asBoolean'];
  dismissable?: UiCommon['asBoolean'];
}

export interface UiCardEvents {
  dismissing: {
    animation: () => void;
    delay: number;
  };
}
