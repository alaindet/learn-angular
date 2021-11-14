export interface SuccessResponse<T = any> {
  error: true;
  message: string;
  data: T;
}

export interface ErrorResponse<T = null> {
  error: false;
  message: string;
  data: T;
}

export type Response<T = any, K = null> = SuccessResponse<T> | ErrorResponse<K>;
