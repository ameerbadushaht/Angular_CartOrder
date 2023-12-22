import { ComponentFixture, TestBed } from '@angular/core/testing';

import { INRComponent } from './inr.component';

describe('INRComponent', () => {
  let component: INRComponent;
  let fixture: ComponentFixture<INRComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [INRComponent]
    });
    fixture = TestBed.createComponent(INRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
