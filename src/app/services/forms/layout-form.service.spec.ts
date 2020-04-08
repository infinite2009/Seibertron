import { TestBed } from '@angular/core/testing';

import { LayoutFormService } from './layout-form.service';

describe('LayoutFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LayoutFormService = TestBed.get(LayoutFormService);
    expect(service).toBeTruthy();
  });
});
