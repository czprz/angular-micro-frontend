import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OverviewModule} from "../../projects/overview/src/lib/overview.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    OverviewModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
