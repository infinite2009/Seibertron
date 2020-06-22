import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowComponentCreatorComponent } from './flow-component-creator.component';

describe('FlowComponentCreatorComponent', () => {
  let component: FlowComponentCreatorComponent;
  let fixture: ComponentFixture<FlowComponentCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowComponentCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowComponentCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
