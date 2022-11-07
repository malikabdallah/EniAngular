import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PommesdetailComponent } from './pommesdetail.component';

describe('PommesdetailComponent', () => {
  let component: PommesdetailComponent;
  let fixture: ComponentFixture<PommesdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PommesdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PommesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
