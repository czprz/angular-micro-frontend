import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BrokerModule } from '@czprz/broker';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [ButtonModule, OverlayPanelModule, BrokerModule],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
