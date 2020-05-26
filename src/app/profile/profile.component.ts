import { Component, OnInit } from "@angular/core";
import { DreamsService } from "../shared/services/dream.service";
import { Dream } from "../shared/models/dream.model";
import { APIService } from "../API.service";
import { UserSettings } from "../shared/models/user-settings.model";
import { UserService } from "../shared/services/user.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  userDreams: Dream[];
  user: any;
  userSettings: UserSettings[] = [];

  constructor(
    private dreamsService: DreamsService,
    private apiService: APIService,
    private userService: UserService
  ) {}

  async ngOnInit() {
    this.user = await this.userService.getCurrentUser();
    this.userDreams = this.dreamsService.getUserDreams();
    // TODO Fetch UserSettings and display it to the user
  }
}
