import { TestBed } from '@angular/core/testing';

import { ProjectModelService } from './project-model.service';

describe('ProjectModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectModelService = TestBed.get(ProjectModelService);
    expect(service).toBeTruthy();
  });
});
