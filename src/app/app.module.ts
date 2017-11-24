import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CockpitModule } from "./cockpit/cockpit.module";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CockpitModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
