import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionMaterialComponent } from './action-material.component';

describe('ActionMaterialComponent', () => {
  let component: ActionMaterialComponent;
  let fixture: ComponentFixture<ActionMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
