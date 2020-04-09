import { TestBed } from '@angular/core/testing';

import { ImageFormService } from './image-form.service';

describe('ImageFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageFormService = TestBed.get(ImageFormService);
    expect(service).toBeTruthy();
  });
});
