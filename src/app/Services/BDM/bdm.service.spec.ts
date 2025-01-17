import { TestBed } from '@angular/core/testing';

import { BDmService } from './bdm.service';

describe('BDmService', () => {
  let service: BDmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BDmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
