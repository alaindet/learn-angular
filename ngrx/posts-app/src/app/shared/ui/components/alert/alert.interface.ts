import { UiCommon, UiCommonEvents } from 'src/app/shared/ui/models/common.interface';

export interface UiAlert {
  message: string;
  type: 'success' | 'error';
  delay: UiCommon['asNumber'];
}

export interface UiAlertEvents {
  dismissing: UiCommonEvents['dismissing'];
}
