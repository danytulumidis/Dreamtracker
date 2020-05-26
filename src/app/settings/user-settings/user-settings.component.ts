import { Component, OnInit } from "@angular/core";
import { UserSettings } from "src/app/shared/models/user-settings.model";
import { APIService } from "src/app/API.service";
import { UserService } from "src/app/shared/services/user.service";

@Component({
  selector: "app-user-settings",
  templateUrl: "./user-settings.component.html",
  styleUrls: ["./user-settings.component.scss"]
})
export class UserSettingsComponent implements OnInit {
  userSettings: UserSettings = {
    name: "",
    jobTitle: "",
    description: ""
  };
  user: any;
  settingsSaved: Boolean = false;

  constructor(
    private apiService: APIService,
    private userService: UserService
  ) {}

  async ngOnInit() {
    this.user = await this.userService.getCurrentUser();
  }

  async saveSettings() {
    const currentUserSettings = await this.apiService.ListUserSettings(
      this.user.attributes.email
    );

    // ! If a user setting already exit for a specific setting update it and NOT generate another one!
    if (currentUserSettings.length === 0) {
      this.apiService.CreateUserSetting({
        settingName: "Name",
        settingValue: this.userSettings.name,
        userID: this.user.attributes.email
      });

      this.apiService.CreateUserSetting({
        settingName: "JobTitle",
        settingValue: this.userSettings.jobTitle,
        userID: this.user.attributes.email
      });

      this.apiService.CreateUserSetting({
        settingName: "Description",
        settingValue: this.userSettings.description,
        userID: this.user.attributes.email
      });
    } else {
      currentUserSettings.forEach(element => {
        switch (element.settingName) {
          case "Name":
            this.apiService.UpdateUserSetting({
              settingID: element.settingID,
              settingValue: this.userSettings.name
            });
            break;
          case "JobTitle":
            this.apiService.UpdateUserSetting({
              settingID: element.settingID,
              settingValue: this.userSettings.jobTitle
            });
            break;
          case "Description":
            this.apiService.UpdateUserSetting({
              settingID: element.settingID,
              settingValue: this.userSettings.description
            });
            break;
          default:
            break;
        }
      });
    }

    this.settingsSaved = true;
  }
}
