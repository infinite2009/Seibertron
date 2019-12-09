import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceManagementComponent } from './interface-management.component';

describe('InterfaceManagementComponent', () => {
  let component: InterfaceManagementComponent;
  let fixture: ComponentFixture<InterfaceManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
