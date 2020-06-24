import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspiringPoepleComponent } from './inspiring-poeple.component';

describe('InspiringPoepleComponent', () => {
  let component: InspiringPoepleComponent;
  let fixture: ComponentFixture<InspiringPoepleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspiringPoepleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspiringPoepleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
