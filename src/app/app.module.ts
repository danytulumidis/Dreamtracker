import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PaymentComponent } from './payment/payment.component';
import { DreamsComponent } from './dreams/dreams.component';
import { DreamsListComponent } from './dreams/dreams-list/dreams-list.component';
import { DreamsListEditComponent } from './dreams/dreams-list-edit/dreams-list-edit.component';
import { GoalsComponent } from './goals/goals.component';
import { GoalsListComponent } from './goals/goals-list/goals-list.component';
import { GoalsListEditComponent } from './goals/goals-list-edit/goals-list-edit.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { DreamsService } from './shared/services/dream.service';
import { GoalsService } from './shared/services/goal.service';

// Amplify Backend
import { AmplifyAngularModule, AmplifyService, AmplifyModules } from 'aws-amplify-angular';
import Auth from '@aws-amplify/auth';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    PaymentComponent,
    DreamsComponent,
    DreamsListComponent,
    DreamsListEditComponent,
    GoalsComponent,
    GoalsListComponent,
    GoalsListEditComponent,
    LandingPageComponent,
    ProfileComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [
    DreamsService,
    GoalsService,
    {
      provide: AmplifyService,
      useFactory:  () => {
        return AmplifyModules({
          Auth
        });
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
