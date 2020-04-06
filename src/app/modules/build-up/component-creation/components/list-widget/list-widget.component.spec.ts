import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWidgetComponent } from './list-widget.component';

describe('ListWidgetComponent', () => {
  let component: ListWidgetComponent;
  let fixture: ComponentFixture<ListWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
