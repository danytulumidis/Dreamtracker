import { Component, OnInit } from '@angular/core';
import { DreamsService } from '../shared/services/dream.service';
import { Dream } from '../shared/models/dream.model';

@Component({
  selector: 'app-dreams',
  templateUrl: './dreams.component.html',
  styleUrls: ['./dreams.component.scss']
})
export class DreamsComponent implements OnInit {
  dreams: Dream[] = [];

  constructor(private dreamsService:DreamsService) { }

  ngOnInit() {
    this.dreams = this.dreamsService.dreams;
  }

  addGoals() {

  }

  saveDream() {

  }
}
