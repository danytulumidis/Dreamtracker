import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleDreamsComponent } from './people-dreams.component';

describe('PeopleDreamsComponent', () => {
  let component: PeopleDreamsComponent;
  let fixture: ComponentFixture<PeopleDreamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleDreamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleDreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
