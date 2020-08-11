import { TestBed } from '@angular/core/testing';

import { MannequinLibService } from './mannequin-lib.service';

describe('MannequinLibService', () => {
  let service: MannequinLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MannequinLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
