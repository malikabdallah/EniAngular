import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordureComponent } from './bordure.component';

describe('BordureComponent', () => {
  let component: BordureComponent;
  let fixture: ComponentFixture<BordureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BordureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BordureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
