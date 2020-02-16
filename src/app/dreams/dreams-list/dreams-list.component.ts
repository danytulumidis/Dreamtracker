import { Component, OnInit, Input } from '@angular/core';
import { Dream } from 'src/app/shared/models/dream.model';
import { DreamsService } from 'src/app/shared/services/dream.service';

@Component({
  selector: 'app-dreams-list',
  templateUrl: './dreams-list.component.html',
  styleUrls: ['./dreams-list.component.scss']
})
export class DreamsListComponent implements OnInit {
  @Input() dreamsList: Dream;
  
  constructor(private dreamService:DreamsService) { }

  ngOnInit() {
    
  }

  // TODO[A] Dream needs another unique indicator than the name
  deleteDream(dreamName: string) {
    this.dreamService.deleteDream(dreamName);
  }

}
