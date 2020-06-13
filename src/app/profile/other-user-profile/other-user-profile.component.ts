import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/shared/services/user.service";
import { UserSettings } from "src/app/shared/models/user-settings.model";
import { Dream } from "src/app/shared/models/dream.model";
import { DreamsService } from "src/app/shared/services/dream.service";
import { Friendship, status } from "src/app/shared/models/friendship.model";

@Component({
  selector: "app-other-user-profile",
  templateUrl: "./other-user-profile.component.html",
  styleUrls: ["./other-user-profile.component.scss"]
})
export class OtherUserProfileComponent implements OnInit {
  userInfo: UserSettings = {
    name: "",
    jobTitle: "",
    description: ""
  };
  userID: string;
  userDreams: Dream[] = [];
  friendshipStatus: Friendship = {
    userA: "",
    userB: "",
    created: "",
    status: "" as status
  };

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private dreamsService: DreamsService
  ) {}

  async ngOnInit() {
    this.userID = this.route.snapshot.params["id"];

    // Get the User Info
    await this.userService.fetchAnotherUserSettings(this.userID);
    this.userInfo = this.userService.getAnotherUserSettings();

    // Get the Dreams of the User
    this.userDreams = this.dreamsService.getPublicUserDream(this.userID);
    // Get Info about Friendship status to decide which button to show
    const friendship = await this.userService.getFriendshipStatus(this.userID);
    this.friendshipStatus = {
      userA: friendship.userA,
      userB: friendship.userB,
      created: friendship.created,
      status: friendship.status as status
    };
  }

  async addFriend() {
    await this.userService.addFriend(this.userID);
  }

  removeFriend() {}
}
