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

export interface RuntimeAlert extends Alert {
  timer: ReturnType<typeof setTimeout>;
}
