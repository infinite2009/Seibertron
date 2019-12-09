import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppManagementComponent } from './app-management.component';

describe('AppManagementComponent', () => {
  let component: AppManagementComponent;
  let fixture: ComponentFixture<AppManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
