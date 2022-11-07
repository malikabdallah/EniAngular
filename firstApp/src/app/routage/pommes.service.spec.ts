import { TestBed } from '@angular/core/testing';

import { PommesService } from './pommes.service';

describe('PommesService', () => {
  let service: PommesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PommesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
