import { TestBed } from '@angular/core/testing';

import { TextFormService } from './text-form.service';

describe('TextFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextFormService = TestBed.get(TextFormService);
    expect(service).toBeTruthy();
  });
});
