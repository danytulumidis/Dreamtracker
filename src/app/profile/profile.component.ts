import { Component, OnInit } from "@angular/core";
import { DreamsService } from "../shared/services/dream.service";
import { Dream } from "../shared/models/dream.model";
import { UserSettings } from "../shared/models/user-settings.model";
import { UserService } from "../shared/services/user.service";
import { Friendship } from "../shared/models/friendship.model";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  userDreams: Dream[];
  userSettings: UserSettings = {
    name: "",
    jobTitle: "",
    description: ""
  };
  userFriendships: Friendship[];
  friendRequests: Friendship[];
  friends: Friendship[];
  isLoading: boolean = false;

  constructor(
    private dreamsService: DreamsService,
    private userService: UserService
  ) {}

  async ngOnInit() {
    this.isLoading = true;
    setTimeout(async () => {
      this.userDreams = this.dreamsService.getUserDreams();
      this.userSettings = this.userService.getUserSettings();
      this.userFriendships = await this.userService.getUserFriendships();
      this.friendRequests = this.userService.getFriendRequests();
      this.friends = this.userService.getFriends();
      this.isLoading = false;
    }, 1100);
  }

  async acceptFriend(request: Friendship) {
    try {
      await this.userService.acceptFriend(request);
      this.friends.push(request);
      this.deleteFromFriendRequest(request);
    } catch (error) {
      console.log(error);
    }
  }

  async declineFriend(request: Friendship) {
    try {
      await this.userService.declineFriend(request);
      this.deleteFromFriendRequest(request);
    } catch (error) {
      console.log(error);
    }
  }

  async removeFriend(friend: Friendship) {
    try {
      await this.userService.deleteFriend(friend.userA, friend.userB);
      this.deleteFromFriend(friend);
    } catch (error) {
      console.log(error);
    }
  }

  deleteFromFriendRequest(request: Friendship) {
    const index = this.friendRequests.findIndex(
      element =>
        element.userA === request.userA && element.userB === request.userB
    );
    this.friendRequests.splice(index, 1);
  }

  deleteFromFriend(friend: Friendship) {
    const index = this.friends.findIndex(
      element =>
        element.userA === friend.userA && element.userB === friend.userB
    );
    this.friends.splice(index, 1);
  }
}
