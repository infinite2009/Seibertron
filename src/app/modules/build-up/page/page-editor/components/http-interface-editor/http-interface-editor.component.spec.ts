import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpInterfaceEditorComponent } from './http-interface-editor.component';

describe('HttpInterfaceEditorComponent', () => {
  let component: HttpInterfaceEditorComponent;
  let fixture: ComponentFixture<HttpInterfaceEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpInterfaceEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpInterfaceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
