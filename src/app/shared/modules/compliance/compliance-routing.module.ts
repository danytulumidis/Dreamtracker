import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LegalNoticeComponent } from "./legal-notice/legal-notice.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";

const routes: Routes = [
  {
    path: "legal",
    component: LegalNoticeComponent
  },
  {
    path: "privacy",
    component: PrivacyPolicyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplianceRoutingModule {}
