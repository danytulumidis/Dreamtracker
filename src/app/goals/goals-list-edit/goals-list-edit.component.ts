import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Goal } from "src/app/shared/models/goal.model";
import { GoalsService } from "src/app/shared/services/goal.service";
import { DreamsService } from "src/app/shared/services/dream.service";
import { copyFileSync } from "fs";

@Component({
  selector: "app-goals-list-edit",
  templateUrl: "./goals-list-edit.component.html",
  styleUrls: ["./goals-list-edit.component.scss"]
})
export class GoalsListEditComponent implements OnInit {
  @Input() public dreamID: number;
  @Input() public goals: Goal[];

  constructor(
    public activeModal: NgbActiveModal,
    private goalsService: GoalsService,
    private dreamService: DreamsService
  ) {}

  ngOnInit() {}

  saveGoal() {
    this.goalsService.saveGoals(this.goals);
    this.activeModal.close();
  }

  addGoals() {
    // Add the goal
    this.goalsService.addGoalInDatabase(this.dreamID);
  }

  deleteGoal(goalID: number) {
    // Delete the goal
    this.goalsService.deleteGoal(goalID);
    // Delete goal from a dream
    this.dreamService.deleteGoalFromDream(this.dreamID, goalID);
  }
}
