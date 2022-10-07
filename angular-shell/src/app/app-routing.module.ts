import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {WelcomeComponent} from "./welcome/welcome.component";

const routes: Routes = [
  {
    path: "dashboard",
    // @ts-ignore
    loadChildren: () => import('overview/Module').then(m => m.OverviewModule)
  },
  {
    path: "**",
    component: WelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
