import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCanvasComponent } from './preview-canvas.component';

describe('PreviewCanvasComponent', () => {
  let component: PreviewCanvasComponent;
  let fixture: ComponentFixture<PreviewCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
