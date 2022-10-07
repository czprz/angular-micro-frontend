import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDirectionsChartComponent } from './wind-directions-chart.component';

describe('WindDirectionsChartComponent', () => {
  let component: WindDirectionsChartComponent;
  let fixture: ComponentFixture<WindDirectionsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindDirectionsChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindDirectionsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
