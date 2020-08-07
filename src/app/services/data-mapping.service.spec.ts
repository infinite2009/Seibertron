import { TestBed } from '@angular/core/testing';

import DataMappingService from './data-mapping.service';

describe('DataMappingService', () => {
  let service: DataMappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataMappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
