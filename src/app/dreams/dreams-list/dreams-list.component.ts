import { Component, OnInit, Input } from '@angular/core';
import { Dream } from 'src/app/shared/models/dream.model';
import { DreamsService } from 'src/app/shared/services/dream.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DreamsListEditComponent } from '../dreams-list-edit/dreams-list-edit.component'

@Component({
  selector: 'app-dreams-list',
  templateUrl: './dreams-list.component.html',
  styleUrls: ['./dreams-list.component.scss']
})
export class DreamsListComponent implements OnInit {
  @Input() dreamsList: Dream;

  constructor(private dreamService:DreamsService, public modalService: NgbModal) { }

  ngOnInit() {
    
  }

  // TODO[A] Dream needs another unique indicator than the name
  deleteDream(dreamName: string) {
    this.dreamService.deleteDream(dreamName);
  }

  editDream(dream: Dream) {
    const modalRef = this.modalService.open(DreamsListEditComponent);
    modalRef.componentInstance.dream = dream;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
  }

}
