import { TestBed } from '@angular/core/testing';

import { MannequinUiService } from './mannequin-ui.service';

describe('MannequinUiService', () => {
  let service: MannequinUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MannequinUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
