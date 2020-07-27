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
import { FaqComponent } from "./faq/faq.component";
import { OtherUserProfileComponent } from "./profile/other-user-profile/other-user-profile.component";
import { InspiringPoepleComponent } from "./inspiring-poeple/inspiring-people.component";

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
  { path: "faq", component: FaqComponent },
  { path: "inspiring", component: InspiringPoepleComponent },
  {
    path: "userProfile",
    canActivate: [AuthGuard],
    component: OtherUserProfileComponent
  },
  { path: "profile", canActivate: [AuthGuard], component: ProfileComponent },
  {
    path: "profile/settings",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./settings/settings.module").then(m => m.SettingsModule)
  },
  {
    path: "compliance",
    loadChildren: () =>
      import("./shared/modules/compliance/compliance.module").then(
        m => m.ComplianceModule
      )
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
