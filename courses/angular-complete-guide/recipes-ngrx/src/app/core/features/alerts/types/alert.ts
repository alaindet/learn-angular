export enum AlertType {
  Primary = 'primary',
  Success = 'success',
  Error = 'danger',
  Warning = 'warning',
}

export interface Alert {
  type?: AlertType;
  message: string;
}
