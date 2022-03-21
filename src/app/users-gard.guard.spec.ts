import { TestBed } from '@angular/core/testing';

import { UsersGardGuard } from './users-gard.guard';

describe('UsersGardGuard', () => {
  let guard: UsersGardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsersGardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
