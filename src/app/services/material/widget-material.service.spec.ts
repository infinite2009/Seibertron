import { TestBed } from '@angular/core/testing';

import { WidgetMaterialService } from './widget-material.service';

describe('WidgetMaterialService', () => {
  let service: WidgetMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
