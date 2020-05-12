import { Component, OnInit } from "@angular/core";
import { DreamsService } from "../shared/services/dream.service";
import { Dream } from "../shared/models/dream.model";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  userDreams: Dream[];

  constructor(private dreamsService: DreamsService) {}

  ngOnInit() {
    this.userDreams = this.dreamsService.getUserDreams();
  }
}
