import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
    routes, 
    withViewTransitions({
      skipInitialTransition: true,
      onViewTransitionCreated(transitionInfo) {},
    })), 
    provideClientHydration(),
    importProvidersFrom(
      HttpClientModule
    )
  ]
};
