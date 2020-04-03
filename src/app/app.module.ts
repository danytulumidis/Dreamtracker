import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { NavbarComponent } from './navbar/navbar.component';
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

// Amplify Backend
import { AmplifyAngularModule, AmplifyService, AmplifyModules } from 'aws-amplify-angular';
import Auth from '@aws-amplify/auth';
import { FormsModule } from '@angular/forms';
import { PeopleDreamsComponent } from './dreams/people-dreams/people-dreams.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PaymentComponent,
    DreamsComponent,
    DreamsListComponent,
    DreamsListEditComponent,
    GoalsComponent,
    GoalsListComponent,
    GoalsListEditComponent,
    LandingPageComponent,
    ProfileComponent,
    AboutComponent,
    AuthComponent,
    PeopleDreamsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AmplifyAngularModule
  ],
  providers: [
    {
      provide: AmplifyService,
      useFactory:  () => {
        return AmplifyModules({
          Auth
        });
      }
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DreamsListEditComponent,
    GoalsListEditComponent
  ]
})
export class AppModule { }
