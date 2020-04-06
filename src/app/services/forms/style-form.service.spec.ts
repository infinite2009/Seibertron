import { TestBed } from '@angular/core/testing';

import { StyleFormService } from './style-form.service';

describe('StyleFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StyleFormService = TestBed.get(StyleFormService);
    expect(service).toBeTruthy();
  });
});
