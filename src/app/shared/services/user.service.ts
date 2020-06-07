import { Injectable } from "@angular/core";
import { APIService } from "src/app/API.service";
import { Auth } from "aws-amplify";
import { UserSettings } from "../models/user-settings.model";

@Injectable({ providedIn: "root" })
export class UserService {
  userSettings: UserSettings = {
    name: "",
    jobTitle: "",
    description: ""
  };

  anotherUserSettings: UserSettings = {
    name: "",
    jobTitle: "",
    description: ""
  };

  constructor(private apiService: APIService) {}

  insertNewUser(user: any) {
    this.apiService
      .CreateUser({
        userID: user.attributes.email,
        name: "Dreamchaser XYZ",
        description: "Tell us about you!",
        created: this.getCurrentDate()
      })
      .then(() => console.log)
      .catch(err => console.log(err));
  }

  // Get the current user from Cognito
  getCurrentUser() {
    return Auth.currentAuthenticatedUser();
  }

  getCurrentDate() {
    let today: any = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();

    today = dd + "." + mm + "." + yyyy;
    return today;
  }

  // Get current authenticated User Settings
  async fetchUserSetting() {
    const user = await this.getCurrentUser();
    const settings = await this.apiService.ListUserSettings(
      user.attributes.email
    );

    this.setUserSettings(settings);
  }

  // Get User Settings of another user
  async fetchAnotherUserSettings() {
    const user = await this.getCurrentUser();
    const settings = await this.apiService.ListUserSettings(
      user.attributes.email
    );

    this.setAnotherUserSettings(settings);
  }

  setUserSettings(settings: any) {
    settings.forEach(element => {
      switch (element.settingName) {
        case "Name":
          this.userSettings.name = element.settingValue;
        case "JobTitle":
          this.userSettings.jobTitle = element.settingValue;
          break;
        case "Description":
          this.userSettings.description = element.settingValue;
          break;
        default:
          break;
      }
    });
  }

  setAnotherUserSettings(settings: any) {
    settings.forEach(element => {
      switch (element.settingName) {
        case "Name":
          this.anotherUserSettings.name = element.settingValue;
        case "JobTitle":
          this.anotherUserSettings.jobTitle = element.settingValue;
          break;
        case "Description":
          this.anotherUserSettings.description = element.settingValue;
          break;
        default:
          break;
      }
    });
  }

  getUserSettings(): UserSettings {
    return this.userSettings;
  }

  getAnotherUserSettings(): UserSettings {
    return this.anotherUserSettings;
  }

  getUserName(): string {
    const { name } = this.userSettings;
    return name;
  }
}
