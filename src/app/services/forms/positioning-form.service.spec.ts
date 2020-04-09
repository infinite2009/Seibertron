import { TestBed } from '@angular/core/testing';

import { PositioningFormService } from './positioning-form.service';

describe('PositioningFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PositioningFormService = TestBed.get(PositioningFormService);
    expect(service).toBeTruthy();
  });
});
