import { TestBed } from '@angular/core/testing';

import { WidgetOperationsService } from './widget-operations.service';

describe('WidgetOperationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WidgetOperationsService = TestBed.get(WidgetOperationsService);
    expect(service).toBeTruthy();
  });
});
