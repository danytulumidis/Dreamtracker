import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { DreamsComponent } from './dreams/dreams.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { GoalsListComponent } from './goals/goals-list/goals-list.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'mydreams', component: DreamsComponent},
  { path: 'goals', component: GoalsListComponent},
  { path: 'signin', component: LoginComponent},
  { path: 'about', component: AboutComponent},
  { path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
