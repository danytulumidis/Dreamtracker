import { Component, OnInit, OnDestroy } from "@angular/core";
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
export class ProfileComponent implements OnInit, OnDestroy {
  userDreams: Dream[];
  userSettings: UserSettings = {
    name: "",
    jobTitle: "",
    description: ""
  };
  userFriendships: Friendship[];
  friendRequests: Friendship[];
  friends: Friendship[];
  myFriends: String[];
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
      // Show all Friends for Listing under the "Friends" Tab
      this.myFriends = this.userService.getFriendName(this.friends);
      this.isLoading = false;
    }, 1100);

    const body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
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

  async removeFriend(index: number) {
    try {
      await this.userService.deleteFriend(
        this.friends[index].userA,
        this.friends[index].userB
      );
      this.deleteFromFriend(index);
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

  deleteFromFriend(index: number) {
    this.friends.splice(index, 1);
    this.myFriends.splice(index, 1);
  }
}
