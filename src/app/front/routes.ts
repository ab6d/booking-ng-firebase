import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
import { RefundPolicyComponent } from "./refund-policy/refund-policy.component";
import { RoomsComponent } from "./rooms/rooms.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ContactComponent } from "./contact/contact.component";
import { TermsComponent } from "./terms/terms.component";
import { LayoutComponent } from "./layout/layout.component";
import { LangGuard } from "./guards/lang.guard";
import { SEOGuard } from "./guards/seo.guard";

export const metadata = {
  en: {
    'about-us': {
      meta: {
        title: 'About us',
        description: 'About us page'
      }
    }
  }
}
export default [
  { path: '', redirectTo: 'en', pathMatch: 'full' },
  {
    path: ':lang',
    component: LayoutComponent,
    canActivate: [ LangGuard, SEOGuard ],
    children: [
      { path: 'about-us', component: AboutUsComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: 'refund-policy', component: RefundPolicyComponent },
      { path: 'rooms', component: RoomsComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'terms', component: TermsComponent },
      { path: '', component: HomeComponent },
    ]
  }
] as Route[];
