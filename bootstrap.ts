import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {DEBUG_INFO_ENABLED} from './src/app/app.constants';
import AppComponent from './src/app/app.component';
import {appConfig} from './src/app/app.config';


// disable debug data on prod profile to improve performance
if (!DEBUG_INFO_ENABLED) {
  enableProdMode();
}

bootstrapApplication(AppComponent, appConfig)
  // eslint-disable-next-line no-console
  .then(() => console.log('Application started'))
  .catch((err: unknown) => console.error(err));
