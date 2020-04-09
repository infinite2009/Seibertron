import { TestBed } from '@angular/core/testing';

import { TreeFormService } from './tree-form.service';

describe('TreeFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreeFormService = TestBed.get(TreeFormService);
    expect(service).toBeTruthy();
  });
});
