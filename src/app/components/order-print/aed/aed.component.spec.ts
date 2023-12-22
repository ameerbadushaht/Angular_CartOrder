import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AEDComponent } from './aed.component';

describe('AEDComponent', () => {
  let component: AEDComponent;
  let fixture: ComponentFixture<AEDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AEDComponent]
    });
    fixture = TestBed.createComponent(AEDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
