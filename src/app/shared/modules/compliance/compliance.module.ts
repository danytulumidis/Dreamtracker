import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LegalNoticeComponent } from "./legal-notice/legal-notice.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
import { ComplianceRoutingModule } from "./compliance-routing.module";

@NgModule({
  declarations: [LegalNoticeComponent, PrivacyPolicyComponent],
  imports: [CommonModule, ComplianceRoutingModule]
})
export class ComplianceModule {}
