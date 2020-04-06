import { TestBed } from '@angular/core/testing';

import { ComponentOpertationsService } from './component-opertations.service';

describe('ComponentOpertationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentOpertationsService = TestBed.get(ComponentOpertationsService);
    expect(service).toBeTruthy();
  });
});
