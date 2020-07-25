import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCommandComponent } from './start-command.component';

describe('StartCommandComponent', () => {
  let component: StartCommandComponent;
  let fixture: ComponentFixture<StartCommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartCommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
