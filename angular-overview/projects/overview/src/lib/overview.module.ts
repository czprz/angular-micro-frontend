import { NgModule } from '@angular/core';
import { OverviewComponent } from './overview.component';
import { RouterModule, Routes } from '@angular/router';
import { WindDirectionsChartComponent } from './wind-directions-chart/wind-directions-chart.component';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { WindSpeedsComponent } from './wind-speeds/wind-speeds.component';
import { WindGuestsComponent } from './wind-guests/wind-guests.component';
import { PowerProductionNowComponent } from './power-production-now/power-production-now.component';
import { PowerProductionComponent } from './power-production/power-production.component';

export const APP_ROUTES: Routes = [
  { path: '', component: OverviewComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    OverviewComponent,
    WindDirectionsChartComponent,
    WindSpeedsComponent,
    WindGuestsComponent,
    PowerProductionNowComponent,
    PowerProductionComponent,
  ],
  imports: [RouterModule.forChild(APP_ROUTES), ChartModule, CardModule],
  exports: [OverviewComponent],
})
export class OverviewModule {}
