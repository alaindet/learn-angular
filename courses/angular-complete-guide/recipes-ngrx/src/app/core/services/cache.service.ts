import { Injectable } from '@angular/core';

import { LocalStorageCacheService } from './local-storage.cache.service';

@Injectable({
  providedIn: 'root',
})
export class CacheService {

  config = {
    localStorage: {
      prefix: 'recipes',
    },
  };

  instances = {
    localStorage: null,
  };

  get localStorage(): LocalStorageCacheService {
    if (!this.instances.localStorage) {
      const config = this.config.localStorage;
      this.instances.localStorage = new LocalStorageCacheService(config);
    }
    return this.instances.localStorage;
  }
}
