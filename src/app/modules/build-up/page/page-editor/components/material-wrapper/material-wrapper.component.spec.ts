import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialWrapperComponent } from './material-wrapper.component';

describe('MaterialWrapperComponent', () => {
  let component: MaterialWrapperComponent;
  let fixture: ComponentFixture<MaterialWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
