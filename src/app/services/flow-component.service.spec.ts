import { TestBed } from '@angular/core/testing';

import { FlowComponentService } from './flow-component.service';

describe('FlowComponentService', () => {
  let service: FlowComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
