import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeNodeWidgetComponent } from './tree-node-widget.component';

describe('TreeNodeWidgetComponent', () => {
  let component: TreeNodeWidgetComponent;
  let fixture: ComponentFixture<TreeNodeWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeNodeWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeNodeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
