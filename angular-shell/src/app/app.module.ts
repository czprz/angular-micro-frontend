import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { MenuComponent } from "./menu/menu.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrokerModule } from "@czprz/broker";

@NgModule({
  declarations: [AppComponent, ToolbarComponent, MenuComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, BrokerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
