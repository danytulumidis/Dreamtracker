import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/shared/services/user.service";
import { UserSettings } from "src/app/shared/models/user-settings.model";
import { Dream } from "src/app/shared/models/dream.model";
import { DreamsService } from "src/app/shared/services/dream.service";

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

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private dreamsService: DreamsService
  ) {}

  async ngOnInit() {
    this.userID = this.route.snapshot.params["id"];
    await this.userService.fetchAnotherUserSettings();
    this.userInfo = this.userService.getAnotherUserSettings();
    this.userDreams = this.dreamsService.getPublicUserDream(this.userID);
  }
}
