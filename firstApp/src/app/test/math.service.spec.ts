import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

fdescribe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MathService]
    });
    service = TestBed.inject(MathService);
  });

  

  it('should be created', () => {
    expect(MathService).toBeTruthy();
  });

  it('la methode increment count ',()=>{
    service.increment(1);
    expect(service.count).toEqual(1);
    service.increment(2);
    expect(service.count).toEqual(2);
  })
});
