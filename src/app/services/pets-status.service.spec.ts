import { TestBed } from '@angular/core/testing';

import { PetsStatusService } from './pets-status.service';

describe('PetsStatusService', () => {
  let service: PetsStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetsStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
