import { TestBed } from '@angular/core/testing';

import { PickUpService } from './pick-up.service';

describe('PickUpService', () => {
  let service: PickUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PickUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
