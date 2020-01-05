import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamsListEditComponent } from './dreams-list-edit.component';

describe('DreamsListEditComponent', () => {
  let component: DreamsListEditComponent;
  let fixture: ComponentFixture<DreamsListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamsListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamsListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
