import { Injectable } from '@angular/core';

import { LocalStorageCacheService } from './local-storage.cache.service';

@Injectable({
  providedIn: 'root',
})
export class CacheService {

  services = {
    localStorage: {
      instance: null,
      config: {
        prefix: 'recipes',
      },
    },
  };

  get localStorage(): LocalStorageCacheService {
    if (!this.services.localStorage.instance) {
      const config = this.services.localStorage.config;
      const instance = new LocalStorageCacheService(config);
      this.services.localStorage.instance = instance;
    }
    return this.services.localStorage.instance;
  }
}
