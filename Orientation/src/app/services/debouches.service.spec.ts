import { TestBed } from '@angular/core/testing';

import { DebouchesService } from './debouches.service';

describe('DebouchesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DebouchesService = TestBed.get(DebouchesService);
    expect(service).toBeTruthy();
  });
});
