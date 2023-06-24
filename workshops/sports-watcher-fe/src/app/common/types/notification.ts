export enum NotificationType {
  Success = 'success',
  Error = 'error',
}

export type Notification = {
  id: number;
  type: NotificationType;
  message: string;
};

export type RuntimeNotification = Notification & {
  more: number; // Remaining notifications count
};
