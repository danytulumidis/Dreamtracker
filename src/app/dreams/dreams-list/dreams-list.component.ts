import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dreams-list',
  templateUrl: './dreams-list.component.html',
  styleUrls: ['./dreams-list.component.scss']
})
export class DreamsListComponent implements OnInit {
  @Input() dreamsList: {name: string, description: string, goals: string[]};
  
  constructor() { }

  ngOnInit() {
    
  }

}
