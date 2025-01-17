import { TestBed } from '@angular/core/testing';

import { BillingDataService } from './billing-data.service';

describe('BillingDataService', () => {
  let service: BillingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
