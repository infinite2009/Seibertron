import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpInterfaceMaterialComponent } from './http-interface-material.component';

describe('HttpInterfaceMaterialComponent', () => {
  let component: HttpInterfaceMaterialComponent;
  let fixture: ComponentFixture<HttpInterfaceMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpInterfaceMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpInterfaceMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
