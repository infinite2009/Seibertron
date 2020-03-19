import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDrivedWidgetComponent } from './data-driven-widget.component';

describe('ComputedWidgetComponent', () => {
  let component: DataDrivedWidgetComponent;
  let fixture: ComponentFixture<DataDrivedWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDrivedWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDrivedWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
