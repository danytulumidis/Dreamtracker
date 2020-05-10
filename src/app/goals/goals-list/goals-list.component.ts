import { Component, OnInit, Input } from "@angular/core";
import { Goal } from "src/app/shared/models/goal.model";
import { GoalsService } from "src/app/shared/services/goal.service";
import { DreamsService } from "src/app/shared/services/dream.service";

@Component({
  selector: "app-goals-list",
  templateUrl: "./goals-list.component.html",
  styleUrls: ["./goals-list.component.scss"]
})
export class GoalsListComponent implements OnInit {
  @Input() goals: Goal;

  constructor(
    private goalsService: GoalsService,
    private dreamsService: DreamsService
  ) {}

  ngOnInit() {}

  async editGoalFinish(isFinished: boolean, goalsID: number, dreamID: number) {
    await this.goalsService.editFinishStatus(isFinished, goalsID);
    this.updateProgressBar(dreamID);
  }

  // update progress bar of the dream
  updateProgressBar(dreamID: number) {
    this.dreamsService.updateProgressBar(dreamID);
  }
}
