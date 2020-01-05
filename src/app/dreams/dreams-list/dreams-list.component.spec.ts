import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamsListComponent } from './dreams-list.component';

describe('DreamsListComponent', () => {
  let component: DreamsListComponent;
  let fixture: ComponentFixture<DreamsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
