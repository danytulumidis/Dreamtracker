import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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
    GoalsListEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
