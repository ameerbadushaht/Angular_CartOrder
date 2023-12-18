import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingSectionComponent } from './listing-section.component';

describe('ListingSectionComponent', () => {
  let component: ListingSectionComponent;
  let fixture: ComponentFixture<ListingSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingSectionComponent]
    });
    fixture = TestBed.createComponent(ListingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
