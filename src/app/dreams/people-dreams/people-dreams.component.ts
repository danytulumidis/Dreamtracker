import { Component, OnInit } from "@angular/core";
import { DreamsService } from "src/app/shared/services/dream.service";
import { Dream } from "src/app/shared/models/dream.model";
import { APIService } from "src/app/API.service";
import { UserService } from "src/app/shared/services/user.service";

@Component({
  selector: "app-people-dreams",
  templateUrl: "./people-dreams.component.html",
  styleUrls: ["./people-dreams.component.scss"]
})
export class PeopleDreamsComponent implements OnInit {
  publicDreams: Dream[] = [];
  user: any;
  userUpvotes: any[];

  constructor(
    private dreamsService: DreamsService,
    private apiService: APIService,
    private userServie: UserService
  ) {}

  async ngOnInit() {
    this.publicDreams = await this.dreamsService.getPublicDreams();

    this.user = await this.userServie.getCurrentUser();
    // Get info if user liked dream already or not
    this.userUpvotes = await this.apiService.ListUpvotes(
      this.user.attributes.email
    );
  }

  async onLikeDream(dreamID: number) {
    // if true then its a unlike else a like
    if (this.checkDreamIsLiked(dreamID)) {
      await this.apiService
        .DeleteUpvote(dreamID)
        .then(data => console.log(data));
      this.dreamsService.likeDream(dreamID, false);
    } else {
      await this.apiService.CreateUpvote({
        dreamID: dreamID,
        userID: this.user.attributes.email
      });
      this.dreamsService.likeDream(dreamID, true);
    }
  }

  checkDreamIsLiked(dreamID: number): boolean {
    if (this.userUpvotes) {
      return this.userUpvotes.some(element => element.dreamID === dreamID);
    }
  }
}
