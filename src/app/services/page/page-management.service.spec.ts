import { TestBed } from '@angular/core/testing';

import { PageManagementService } from './page.service';

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
