import { TestBed } from '@angular/core/testing';

import { BaseFormService } from './base-form.service';

describe('BaseFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseFormService = TestBed.get(BaseFormService);
    expect(service).toBeTruthy();
  });
});
