import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { MenuComponent } from "./menu/menu.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrokerModule } from "@czprz/broker";
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import {CardModule} from "primeng/card";

@NgModule({
  declarations: [AppComponent, ToolbarComponent, MenuComponent, WelcomeComponent, FooterComponent],
    imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, BrokerModule, CardModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
