import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalEventsComponent } from './normal-events.component';

describe('NormalEventsComponent', () => {
  let component: NormalEventsComponent;
  let fixture: ComponentFixture<NormalEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
