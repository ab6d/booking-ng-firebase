import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export const LangGuard: CanActivateFn = ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) => {
  const lang = route.paramMap.get('lang');
  const translate = inject( TranslateService );
  const router = inject( Router );

  if ( lang !== 'en' && lang !== 'ar' ) {
    router.navigate(['/en']);
  }
    
  translate.use(lang || 'en');

  return true
};

