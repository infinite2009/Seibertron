import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCommandComponent } from './insert-command.component';

describe('InsertCommandComponent', () => {
  let component: InsertCommandComponent;
  let fixture: ComponentFixture<InsertCommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertCommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
