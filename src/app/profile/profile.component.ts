import { Component, OnInit } from "@angular/core";
import { DreamsService } from "../shared/services/dream.service";
import { Dream } from "../shared/models/dream.model";
import { APIService } from "../API.service";
import { UserSettings } from "../shared/models/user-settings.model";
import { UserService } from "../shared/services/user.service";
import { element } from "protractor";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  userDreams: Dream[];
  user: any;
  userSettings: UserSettings = {
    name: "",
    jobTitle: "",
    description: ""
  };

  constructor(
    private dreamsService: DreamsService,
    private userService: UserService
  ) {}

  async ngOnInit() {
    this.user = await this.userService.getCurrentUser();
    this.userDreams = this.dreamsService.getUserDreams();

    await this.userService.fetchUserSetting();
    this.userSettings = this.userService.getUserSettings();
  }
}
