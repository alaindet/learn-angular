import { Payload } from '../types';

export const createPayload = <T = any>(
  payload: T
): Payload<T> => {
  return { payload };
};
