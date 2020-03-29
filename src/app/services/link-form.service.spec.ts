import { TestBed } from '@angular/core/testing';

import { LinkFormService } from './link-form.service';

describe('LinkFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinkFormService = TestBed.get(LinkFormService);
    expect(service).toBeTruthy();
  });
});
