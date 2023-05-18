import { TestBed } from '@angular/core/testing';

import { AuthEmployeeGuard } from './auth-employee.guard';

describe('AuthEmployeeGuard', () => {
  let guard: AuthEmployeeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthEmployeeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
