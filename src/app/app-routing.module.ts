import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { DreamsListComponent } from './dreams/dreams-list/dreams-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { GoalsListComponent } from './goals/goals-list/goals-list.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'mydreams', component: DreamsListComponent},
  { path: 'goals', component: GoalsListComponent},
  { path: 'signin', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
