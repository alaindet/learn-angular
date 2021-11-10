import { StoreDevtoolsOptions } from '@ngrx/store-devtools';

import { environment } from 'src/environments/environment';

export const storeConfig: StoreDevtoolsOptions = {
  maxAge: 100,
  logOnly: environment.production,
};
