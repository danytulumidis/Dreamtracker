import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// components
import { DreamsComponent } from "./dreams/dreams.component";
import { PeopleDreamsComponent } from "./dreams/people-dreams/people-dreams.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AuthComponent } from "./auth/auth.component";
import { GoalsComponent } from "./goals/goals.component";
import { AboutComponent } from "./about/about.component";
import { ProfileComponent } from "./profile/profile.component";
import { AuthGuard } from "./auth/auth-guard.service";

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "mydreams", canActivate: [AuthGuard], component: DreamsComponent },
  {
    path: "alldreams",
    canActivate: [AuthGuard],
    component: PeopleDreamsComponent
  },
  { path: "goals", canActivate: [AuthGuard], component: GoalsComponent },
  { path: "auth", component: AuthComponent },
  { path: "about", component: AboutComponent },
  //! TODO Parameter for user id
  { path: "profile", canActivate: [AuthGuard], component: ProfileComponent },
  {
    path: "profile/settings",
    loadChildren: () =>
      import("./settings/settings.module").then(m => m.SettingsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
