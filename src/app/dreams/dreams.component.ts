import { Component, OnInit } from "@angular/core";
import { DreamsService } from "../shared/services/dream.service";
import { Dream } from "../shared/models/dream.model";

@Component({
  selector: "app-dreams",
  templateUrl: "./dreams.component.html",
  styleUrls: ["./dreams.component.scss"]
})
export class DreamsComponent implements OnInit {
  dreams: Dream[] = [];
  tooManyDreams: String;

  constructor(private dreamsService: DreamsService) {}

  ngOnInit() {
    this.dreams = this.dreamsService.getUserDreams();
  }

  saveDream(
    dreamName: HTMLInputElement,
    dreamDescr: HTMLTextAreaElement,
    dreamPrivate: HTMLInputElement
  ) {
    if (!this.dreamsService.checkDreamCount()) {
      this.tooManyDreams = "You cant have more than 5 active dreams at once!";
    } else {
      this.dreamsService.saveNewDream(
        dreamName.value,
        dreamDescr.value,
        dreamPrivate.checked
      );
    }
  }
}
