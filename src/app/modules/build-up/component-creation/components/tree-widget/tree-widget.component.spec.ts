import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeWidgetComponent } from './tree-widget.component';

describe('TreeNodeWidgetComponent', () => {
  let component: TreeWidgetComponent;
  let fixture: ComponentFixture<TreeWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
