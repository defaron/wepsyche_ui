import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPrimaryCarouselComponent } from './landing-primary-carousel/landing-primary-carousel.component';
import { SearchPsychoAndLoginUserComponent } from './search-psycho-and-login-user/search-psycho-and-login-user.component';
import { SearchPsychoAndLoginUserMbComponent } from './search-psycho-and-login-user-mb/search-psycho-and-login-user-mb.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent, LandingPrimaryCarouselComponent, SearchPsychoAndLoginUserComponent, SearchPsychoAndLoginUserMbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
