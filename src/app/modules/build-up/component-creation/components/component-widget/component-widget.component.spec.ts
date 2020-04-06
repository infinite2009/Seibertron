import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentWidgetComponent } from './component-widget.component';

describe('ComponentWidgetComponent', () => {
  let component: ComponentWidgetComponent;
  let fixture: ComponentFixture<ComponentWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
