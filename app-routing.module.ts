import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { PioneerComponent } from './pioneer/pioneer.component';
import { OfferComponent } from './offer/offer.component';
import { AfricaComponent } from './africa/africa.component';
import { LicenseComponent } from './license/license.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

const routes: Routes = [
  { path: '', component: HeroComponent }, // Set HeroComponent as the default route
  { path: 'hero', component: HeroComponent },
  { path: 'partnership', component: PartnershipComponent },
  { path: 'pioneer', component: PioneerComponent },
  { path: 'offer', component: OfferComponent },
  { path: 'africa', component: AfricaComponent },
  { path: 'license', component: LicenseComponent },
  { path: 'newsletter', component: NewsletterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
