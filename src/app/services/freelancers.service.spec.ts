import { TestBed } from '@angular/core/testing';

import { FreelancersService } from './freelancers.service';

describe('FreelancersService', () => {
  let service: FreelancersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreelancersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
