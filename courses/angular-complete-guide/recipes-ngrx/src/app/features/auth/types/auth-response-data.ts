import { Response } from '@/shared/types';

export interface LoginResponseData {
  email: string;
  token: string;
}

export type LoginResponse = Response<LoginResponseData>;
