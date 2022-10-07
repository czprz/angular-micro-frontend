import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerProductionNowComponent } from './power-production-now.component';

describe('PowerProductionNowComponent', () => {
  let component: PowerProductionNowComponent;
  let fixture: ComponentFixture<PowerProductionNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerProductionNowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerProductionNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
