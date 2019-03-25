import { TestBed } from '@angular/core/testing';

import { AboutmeService } from './aboutme.service';

describe('AboutmeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AboutmeService = TestBed.get(AboutmeService);
    expect(service).toBeTruthy();
  });
});
