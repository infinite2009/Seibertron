import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicDrivenWidgetComponent } from './logic-driven-widget.component';

describe('LogicDrivenWidgetComponent', () => {
  let component: LogicDrivenWidgetComponent;
  let fixture: ComponentFixture<LogicDrivenWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogicDrivenWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicDrivenWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
