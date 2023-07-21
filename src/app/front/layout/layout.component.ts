import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BackToTopComponent } from '../components/back-to-top/back-to-top.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslateModule, RouterModule, MatSidenavModule, BackToTopComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  constructor( public translate: TranslateService, private router: Router, private activatedRoute: ActivatedRoute ) { 
  }

  get slashLang () {
    return '/' + this.translate.currentLang;
  }

  get isEnglish () {
    return this.translate.currentLang === 'en';
  }

  get isArabic () {
    return this.translate.currentLang === 'ar';
  }
  
  changeLanguage(lang: string) {
    const currentUrl = this.router.url; // Get the current URL
    const urlTree = this.router.parseUrl(currentUrl);
    const urlSegments = urlTree.root.children['primary'].segments;
    
    // Modify the language segment
    urlSegments[0].path = lang;

    const navigationExtras: NavigationExtras = {
      queryParamsHandling: 'preserve', // Preserve the existing query params
      fragment: urlTree.fragment || '',
    };

    const newUrl = this.router.serializeUrl(urlTree); // Serialize the updated URL tree

    // Navigate to the new URL
    this.router.navigateByUrl( newUrl, navigationExtras );
  }
}
