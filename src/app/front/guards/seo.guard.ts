

import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { SEOService } from './../services/seo.service';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';

function getSecondUrlPart(route: ActivatedRouteSnapshot): string {
    const urlSegments = route.url;
  
    // Check if the URL has at least two segments
    if (urlSegments.length >= 2) {
      return urlSegments[1].path; // Retrieve the second segment
    }
  
    return 'home';
}
  
export const SEOGuard: CanActivateFn = async ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) => {
    
    const seo: SEOService = inject( SEOService );
    const translate: TranslateService = inject( TranslateService );
    
    const title = await firstValueFrom( translate.get( getSecondUrlPart( route ) + '.meta.title' ) );
    const description = await firstValueFrom( translate.get( getSecondUrlPart( route ) + '.meta.description' ) );

    seo.updateTitle(title);
    seo.updateDescription(description);

    return true
};

