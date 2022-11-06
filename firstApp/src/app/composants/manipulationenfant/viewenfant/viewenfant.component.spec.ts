import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewenfantComponent } from './viewenfant.component';

describe('ViewenfantComponent', () => {
  let component: ViewenfantComponent;
  let fixture: ComponentFixture<ViewenfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewenfantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewenfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
