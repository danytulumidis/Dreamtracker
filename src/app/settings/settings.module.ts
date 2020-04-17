import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserSettingsComponent } from "./user-settings/user-settings.component";
import { SettingsRoutingModule } from "./settings-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [UserSettingsComponent],
  imports: [CommonModule, SettingsRoutingModule, NgbModule]
})
export class SettingsModule {}
