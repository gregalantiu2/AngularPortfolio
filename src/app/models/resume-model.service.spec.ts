import { TestBed } from '@angular/core/testing';

import { ResumeModelService } from './resume-model.service';

describe('ResumeModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResumeModelService = TestBed.get(ResumeModelService);
    expect(service).toBeTruthy();
  });
});
