import { TestBed } from '@angular/core/testing';

import { PageManagementService } from './page-management.service';

describe('PageManagementService', () => {
  let service: PageManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
