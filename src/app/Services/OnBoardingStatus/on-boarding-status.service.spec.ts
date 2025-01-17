import { TestBed } from '@angular/core/testing';

import { OnBoardingStatusService } from './on-boarding-status.service';

describe('OnBoardingStatusService', () => {
  let service: OnBoardingStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnBoardingStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
