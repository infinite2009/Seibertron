import { TestBed } from '@angular/core/testing';

import { ComponentManagementService } from './component-management.service';

describe('ComponentManagementService', () => {
  let service: ComponentManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
