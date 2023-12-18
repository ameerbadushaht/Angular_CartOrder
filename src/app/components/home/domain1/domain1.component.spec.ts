import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Domain1Component } from './domain1.component';

describe('Domain1Component', () => {
  let component: Domain1Component;
  let fixture: ComponentFixture<Domain1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Domain1Component]
    });
    fixture = TestBed.createComponent(Domain1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
