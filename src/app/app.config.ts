import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { TranslateModule } from '@ngx-translate/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { INFRA_PROVIDERS } from './infrastructure/infra-providers'
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
      },
      defaultLanguage: 'en'
    })),
    provideRouter(routes),
    provideAnimations(),
    ...INFRA_PROVIDERS
]
};
