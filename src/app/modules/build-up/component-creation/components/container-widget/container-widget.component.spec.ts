import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerWidgetComponent } from './container-widget.component';

describe('ContainerWidgetComponent', () => {
  let component: ContainerWidgetComponent;
  let fixture: ComponentFixture<ContainerWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
