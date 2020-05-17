import { Component, OnInit, Input } from "@angular/core";
import { Dream } from "src/app/shared/models/dream.model";
import { DreamsService } from "src/app/shared/services/dream.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DreamsListEditComponent } from "../dreams-list-edit/dreams-list-edit.component";
import { Goal } from "src/app/shared/models/goal.model";
import { GoalsListEditComponent } from "src/app/goals/goals-list-edit/goals-list-edit.component";

@Component({
  selector: "app-dreams-list",
  templateUrl: "./dreams-list.component.html",
  styleUrls: ["./dreams-list.component.scss"]
})
export class DreamsListComponent implements OnInit {
  @Input() dreamsList: Dream;
  showDelete: boolean;
  confirmDeletion: boolean = false;

  constructor(
    private dreamService: DreamsService,
    public modalService: NgbModal
  ) {}

  ngOnInit() {}

  tryDeleteDream() {
    this.showDelete = true;
  }

  deleteDream(dreamID: number, confirmation: boolean) {
    if (confirmation) {
      this.dreamService.deleteDream(dreamID);
    }
    this.showDelete = false;
  }

  editDream(dream: Dream) {
    const modalRef = this.modalService.open(DreamsListEditComponent);
    modalRef.componentInstance.dream = dream;
    modalRef.result.then(result => {
      if (result) {
        console.log(result);
      }
    });
  }

  editGoals(goals: Goal) {
    const modalRef = this.modalService.open(GoalsListEditComponent);
    modalRef.componentInstance.goals = goals;
    modalRef.componentInstance.dreamID = this.dreamsList.ID;
    modalRef.result.then(result => {
      if (result) {
        console.log(result);
      }
    });
  }
}
