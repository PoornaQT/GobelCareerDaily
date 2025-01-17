import { TestBed } from '@angular/core/testing';

import { FiscialYearService } from './fiscial-year.service';

describe('FiscialYearService', () => {
  let service: FiscialYearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiscialYearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
