import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerProductionComponent } from './power-production.component';

describe('PowerProductionComponent', () => {
  let component: PowerProductionComponent;
  let fixture: ComponentFixture<PowerProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerProductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
