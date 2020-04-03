import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '../shared/models/goal.model';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  @Input() goals: Goal;

  constructor() { }

  ngOnInit() {
  }

}
