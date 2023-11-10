import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import logger from './lib/logger';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => logger(err));
