import { CacheServiceConfig, BaseCacheService } from '../types';

export class LocalStorageCacheService implements BaseCacheService {
  private prefix: string;

  constructor(config: CacheServiceConfig) {
    this.prefix = config.prefix;
  }

  set(key: string, value: any): void {
    const fullKey = this.getFullKey(key);
    localStorage.setItem(fullKey, value);
  }

  get(key: string): any | null {
    const fullKey = this.getFullKey(key);
    return localStorage.getItem(fullKey);
  }

  delete(key: string): void {
    const fullKey = this.getFullKey(key);
    localStorage.removeItem(fullKey);
  }

  private getFullKey(key: string): string {
    return this.prefix ? `${this.prefix}.${key}` : key;
  }
}
