import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindGuestsComponent } from './wind-guests.component';

describe('WindGuestsComponent', () => {
  let component: WindGuestsComponent;
  let fixture: ComponentFixture<WindGuestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindGuestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
