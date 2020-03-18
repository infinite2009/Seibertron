import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedWidgetComponent } from './computed-widget.component';

describe('ComputedWidgetComponent', () => {
  let component: ComputedWidgetComponent;
  let fixture: ComponentFixture<ComputedWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputedWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputedWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
