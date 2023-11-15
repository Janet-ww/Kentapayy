import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { PioneerComponent } from './pioneer/pioneer.component';
import { OfferComponent } from './offer/offer.component';
import { AfricaComponent } from './africa/africa.component';
import { LicenseComponent } from './license/license.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { SmsComponent } from './sms/sms.component';
import { OnlinepaymentComponent } from './onlinepayment/onlinepayment.component';
import { UssdComponent } from './ussd/ussd.component';
import { AirtimeComponent } from './airtime/airtime.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    PartnershipComponent,
    PioneerComponent,
    OfferComponent,
    AfricaComponent,
    LicenseComponent,
    NewsletterComponent,
    SmsComponent,
    OnlinepaymentComponent,
    UssdComponent,
    AirtimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
