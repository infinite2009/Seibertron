import { TestBed } from '@angular/core/testing';

import { PositioningService } from './positioning.service';

describe('PositioningService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PositioningService = TestBed.get(PositioningService);
    expect(service).toBeTruthy();
  });
});
