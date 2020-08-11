import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationMaskComponent } from './operation-mask.component';

describe('OperationMaskComponent', () => {
  let component: OperationMaskComponent;
  let fixture: ComponentFixture<OperationMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
