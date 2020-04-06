import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixWidgetComponent } from './matrix-widget.component';

describe('MatrixWidgetComponent', () => {
  let component: MatrixWidgetComponent;
  let fixture: ComponentFixture<MatrixWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrixWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
