import { TestBed } from '@angular/core/testing';

import { BillableService } from './billable.service';

describe('BillableService', () => {
  let service: BillableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
