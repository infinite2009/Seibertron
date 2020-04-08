import { TestBed } from '@angular/core/testing';

import { BasicFormService } from './basic-form.service';

describe('BasicFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicFormService = TestBed.get(BasicFormService);
    expect(service).toBeTruthy();
  });
});
