import { Injectable } from "@angular/core";
import { APIService } from "src/app/API.service";
import { Auth } from "aws-amplify";
import { UserSettings } from "../models/user-settings.model";
import { Friendship, status } from "../models/friendship.model";
import { element } from "protractor";

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

  userFriendships: Friendship[] = [];
  currentUser: any;

  constructor(private apiService: APIService) {
    this.setCurrentUser();
  }

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

  async setCurrentUser() {
    this.currentUser = await Auth.currentAuthenticatedUser();
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

  // Fetch all users that are on the public dreams
  async fetchPublicDreamUsers() {
    return await this.apiService.ListUsers();
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
  async fetchAnotherUserSettings(userID: string) {
    const settings = await this.apiService.ListUserSettings(userID);

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

  async addFriend(userID: string) {
    const currentUser = await this.getCurrentUser();
    await this.apiService.CreateFriendship({
      userA: currentUser.attributes.email,
      userB: userID,
      created: this.getCurrentDate(),
      status: "requested" as status
    });
  }

  async deleteFriend(userA: string, userB: string) {
    await this.apiService.DeleteFriendship(userA, userB);
  }

  async getFriendshipStatus(userID: string) {
    const currentUser = await this.getCurrentUser();
    // Check if two users are in a frriendship status vice versa
    const friendship =
      (await this.apiService.GetFriendship(
        currentUser.attributes.email,
        userID
      )) ||
      (await this.apiService.GetFriendship(
        userID,
        currentUser.attributes.email
      ));

    return friendship;
  }

  async listUserFriendships() {
    const friendships = await this.apiService.ListUserFriendships(
      this.currentUser.attributes.email
    );

    this.userFriendships = [];

    friendships.forEach(element => {
      this.userFriendships.push({
        userA: element.userA,
        userB: element.userB,
        created: element.created,
        status: element.status as status
      });
    });
  }

  async getUserFriendships() {
    await this.listUserFriendships();
    return this.userFriendships;
  }

  setUserFriendship(friendship: Friendship, newStatus: status) {
    const index = this.userFriendships.findIndex(
      element =>
        element.userA === friendship.userA && element.userB === friendship.userB
    );
    if (index !== -1) {
      this.userFriendships[index].status = newStatus;
      this.userFriendships[index].created = this.getCurrentDate();
    }
  }

  getFriendRequests(): Friendship[] {
    return this.userFriendships.filter(
      element =>
        element.userB === this.currentUser.attributes.email &&
        element.status === "requested"
    );
  }

  getFriends(): Friendship[] {
    return this.userFriendships.filter(
      element => element.status === "accepted"
    );
  }

  async acceptFriend(request: Friendship) {
    await this.apiService.UpdateFriendship(
      request.userA,
      request.userB,
      "accepted" as status
    );
    this.setUserFriendship(request, "accepted");
  }

  async declineFriend(request: Friendship) {
    await this.apiService.UpdateFriendship(
      request.userA,
      request.userB,
      "declined" as status
    );
    this.setUserFriendship(request, "declined");
  }
}
