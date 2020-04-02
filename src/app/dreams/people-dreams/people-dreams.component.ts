import { Component, OnInit } from '@angular/core';
import { DreamsService } from 'src/app/shared/services/dream.service';
import { Dream } from 'src/app/shared/models/dream.model';

@Component({
  selector: 'app-people-dreams',
  templateUrl: './people-dreams.component.html',
  styleUrls: ['./people-dreams.component.scss']
})
export class PeopleDreamsComponent implements OnInit {
  publicDreams: Dream[] = [];
  
  constructor(private dreamsService: DreamsService) { }

  ngOnInit() {
    this.publicDreams = this.dreamsService.getPublicDreams();
  }

}
