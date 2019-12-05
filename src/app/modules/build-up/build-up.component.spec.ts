import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildUpComponent } from './build-up.component';

describe('BuildUpComponent', () => {
  let component: BuildUpComponent;
  let fixture: ComponentFixture<BuildUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
