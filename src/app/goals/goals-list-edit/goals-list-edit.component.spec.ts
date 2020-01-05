import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsListEditComponent } from './goals-list-edit.component';

describe('GoalsListEditComponent', () => {
  let component: GoalsListEditComponent;
  let fixture: ComponentFixture<GoalsListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
