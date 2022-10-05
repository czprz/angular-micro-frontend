import { Component } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";
import { ThemeService } from "./common/theme.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(
    private readonly primeNgConfig: PrimeNGConfig,
    private readonly theme: ThemeService
  ) {}

  ngOnInit(): void {
    this.primeNgConfig.ripple = true;
    this.theme.start();
  }
}
