import { TestBed } from '@angular/core/testing';

import { PsyService } from './psy.service';

describe('PsyService', () => {
  let service: PsyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PsyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
