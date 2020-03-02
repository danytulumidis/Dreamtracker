import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { DreamsComponent } from './dreams/dreams.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthComponent } from './auth/auth.component';
import { GoalsListComponent } from './goals/goals-list/goals-list.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth/auth-guard.service';


const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'mydreams', canActivate: [AuthGuard], component: DreamsComponent},
  { path: 'goals', canActivate: [AuthGuard], component: GoalsListComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'about', component: AboutComponent},
  { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
