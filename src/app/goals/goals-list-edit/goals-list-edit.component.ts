import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Goal } from 'src/app/shared/models/goal.model';
import { GoalsService } from 'src/app/shared/services/goal.service';
import { DreamsService } from 'src/app/shared/services/dream.service';

@Component({
  selector: 'app-goals-list-edit',
  templateUrl: './goals-list-edit.component.html',
  styleUrls: ['./goals-list-edit.component.scss']
})
export class GoalsListEditComponent implements OnInit {
  @Input() public goals:Goal[];
  @Input() public dreamID:number;

  constructor(public activeModal: NgbActiveModal, private goalsService:GoalsService, private dreamsService:DreamsService) { }

  ngOnInit() {
  }

  saveGoal() {
    this.activeModal.close();
  }

  addGoals() {
    // Add the goal
    this.goalsService.addGoal(this.dreamID);
    // Update the goals on the dream
    this.dreamsService.updateGoal(this.dreamID);
    // Update the modal
    this.goals = this.goalsService.getGoals(this.dreamID);
  }

  deleteGoal() {
    // Delete the goal
    this.goalsService.deleteGoal(this.dreamID);
    // Update the goals on the dream
    this.dreamsService.updateGoal(this.dreamID);
    // Update the modal
    this.goals = this.goalsService.getGoals(this.dreamID);
  }

}
