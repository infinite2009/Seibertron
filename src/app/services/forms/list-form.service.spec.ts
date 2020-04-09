import { TestBed } from '@angular/core/testing';

import { ListFormService } from './list-form.service';

describe('ListFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListFormService = TestBed.get(ListFormService);
    expect(service).toBeTruthy();
  });
});
