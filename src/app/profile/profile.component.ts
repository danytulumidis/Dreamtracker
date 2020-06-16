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

  constructor(
    private dreamsService: DreamsService,
    private userService: UserService
  ) {}

  async ngOnInit() {
    this.userDreams = this.dreamsService.getUserDreams();
    this.userSettings = this.userService.getUserSettings();
    this.userFriendships = await this.userService.getUserFriendships();
    this.friendRequests = this.userService.getFriendRequests();
    this.friends = this.userService.getFriends();
  }

  async acceptFriend(request: Friendship) {
    try {
      await this.userService.acceptFriend(request);
    } catch (error) {
      console.log(error);
    }
  }

  async declineFriend(request: Friendship) {
    try {
      await this.userService.declineFriend(request);
    } catch (error) {
      console.log(error);
    }
  }
}
