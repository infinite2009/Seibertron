import { TestBed } from '@angular/core/testing';

import { ContainerFormService } from './container-form.service';

describe('BfcFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContainerFormService = TestBed.get(ContainerFormService);
    expect(service).toBeTruthy();
  });
});
