export interface BaseCacheService {
  set(key: string, value: any): void;
  get(key: string): any | null;
  delete(key: string): void;
}
