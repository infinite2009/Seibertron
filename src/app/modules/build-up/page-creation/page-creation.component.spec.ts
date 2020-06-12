import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreationComponent } from './page-creation.component';

describe('PageCreationComponent', () => {
  let component: PageCreationComponent;
  let fixture: ComponentFixture<PageCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
