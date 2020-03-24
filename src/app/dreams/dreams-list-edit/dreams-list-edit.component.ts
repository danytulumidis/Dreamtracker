import { Component, OnInit, Input } from '@angular/core';
import { Dream } from 'src/app/shared/models/dream.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DreamsService } from 'src/app/shared/services/dream.service';

@Component({
  selector: 'app-dreams-list-edit',
  templateUrl: './dreams-list-edit.component.html',
  styleUrls: ['./dreams-list-edit.component.scss']
})
export class DreamsListEditComponent implements OnInit {
  @Input() public dream:Dream;
  
  constructor(public activeModal: NgbActiveModal, private dreamService:DreamsService) { }

  ngOnInit() {
  }

  saveDream(editedDream) {
    this.dreamService.saveEditedDream(editedDream);
    this.activeModal.close();
  }

}
