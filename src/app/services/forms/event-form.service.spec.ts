import { TestBed } from '@angular/core/testing';

import { EventFormService } from './event-form.service';

describe('EventFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventFormService = TestBed.get(EventFormService);
    expect(service).toBeTruthy();
  });
});
