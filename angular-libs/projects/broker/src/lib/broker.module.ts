import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrokerService } from './broker.service';
import { ConfigRepositoryService } from './config/config-repository.service';
import { ConfigFacadeService } from './config/config-facade.service';

@NgModule({
  declarations: [],
  providers: [BrokerService, ConfigRepositoryService, ConfigFacadeService],
  imports: [CommonModule],
})
export class BrokerModule {}
