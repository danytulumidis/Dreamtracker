import { Injectable } from "@angular/core";
import { APIService } from "src/app/API.service";
import { Auth } from "aws-amplify";
import { UserSettings } from "../models/user-settings.model";
import { Friendship, status } from "../models/friendship.model";

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
  // Show all Friends for Listing under the "Friends" Tab
  myFriends: String[] = [];
  currentUser: any;

  constructor(private apiService: APIService) {}

  insertNewUser() {
    this.apiService
      .CreateUser({
        userID: this.currentUser.attributes.email,
        name: "Dreamchaser XYZ",
        description: "Tell us about you!",
        created: this.getCurrentDate()
      })
      .then(() => console.log)
      .catch(err => console.log(err));
  }

  // Get the current user from Cognito
  async getCurrentUser() {
    try {
      this.currentUser = await Auth.currentAuthenticatedUser();
    } catch (error) {
      console.log(error);
    }
  }

  get user(): any {
    return this.currentUser;
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
    const settings = await this.apiService.ListUserSettings(
      this.currentUser.attributes.email
    );

    this.setUserSettings(settings);
  }

  // Get User Settings of another user
  async fetchAnotherUserSettings(userID: string) {
    const settings = await this.apiService.ListUserSettings(userID);

    this.setAnotherUserSettings(settings);
  }

  async setMyFriends(userID: string) {
    const settings = await this.apiService.ListUserSettings(userID);
    this.myFriends.push(
      settings.find(setting => setting.settingName === "Name").settingValue
    );
  }

  setUserSettings(settings: any) {
    settings.forEach(element => {
      switch (element.settingName) {
        case "Name":
          this.userSettings.name = element.settingValue;
          break;
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
    return await this.apiService.CreateFriendship({
      userA: this.currentUser.attributes.email,
      userB: userID,
      created: this.getCurrentDate(),
      status: "requested" as status
    });
  }

  async deleteFriend(userA: string, userB: string) {
    await this.apiService.DeleteFriendship(userA, userB);
  }

  async getFriendshipStatus(userID: string) {
    // Check if two users are in a frriendship status vice versa
    const friendship =
      (await this.apiService.GetFriendship(
        this.currentUser.attributes.email,
        userID
      )) ||
      (await this.apiService.GetFriendship(
        userID,
        this.currentUser.attributes.email
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

  getFriendName(friends: Friendship[]) {
    this.myFriends = [];
    friends.forEach(friend => {
      if (friend.userA === this.currentUser.attributes.email) {
        this.setMyFriends(friend.userB);
      } else {
        this.setMyFriends(friend.userA);
      }
    });
    return this.myFriends;
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
