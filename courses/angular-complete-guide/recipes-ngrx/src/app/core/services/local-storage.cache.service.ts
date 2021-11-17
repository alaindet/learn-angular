import { CacheServiceConfig } from '../types';

export class LocalStorageCacheService {
  private prefix: string;

  constructor(config: CacheServiceConfig) {
    this.prefix = config.prefix;
  }
}
