import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateBarComponent } from './state-bar.component';

describe('StateBarComponent', () => {
  let component: StateBarComponent;
  let fixture: ComponentFixture<StateBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
