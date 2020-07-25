import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTemplateListComponent } from './component-template-list.component';

describe('ComponentTemplateListComponent', () => {
  let component: ComponentTemplateListComponent;
  let fixture: ComponentFixture<ComponentTemplateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentTemplateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTemplateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
