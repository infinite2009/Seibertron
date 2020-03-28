import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleCommandComponent } from './style-command.component';

describe('StyleCommandComponent', () => {
  let component: StyleCommandComponent;
  let fixture: ComponentFixture<StyleCommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleCommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
