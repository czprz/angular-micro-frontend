import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindSpeedsComponent } from './wind-speeds.component';

describe('WindSpeedsComponent', () => {
  let component: WindSpeedsComponent;
  let fixture: ComponentFixture<WindSpeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindSpeedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindSpeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
