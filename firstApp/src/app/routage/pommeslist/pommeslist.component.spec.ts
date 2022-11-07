import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PommeslistComponent } from './pommeslist.component';

describe('PommeslistComponent', () => {
  let component: PommeslistComponent;
  let fixture: ComponentFixture<PommeslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PommeslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PommeslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
