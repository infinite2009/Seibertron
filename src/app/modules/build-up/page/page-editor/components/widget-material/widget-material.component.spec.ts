import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMaterialComponent } from './widget-material.component';

describe('WidgetMaterialComponent', () => {
  let component: WidgetMaterialComponent;
  let fixture: ComponentFixture<WidgetMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
