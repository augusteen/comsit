import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CockpitHeaderComponent } from "./cockpit-header/cockpit-header.component";
@NgModule({
  declarations: [CockpitHeaderComponent],
  imports: [FlexLayoutModule],
  providers: [],
  bootstrap: [CockpitHeaderComponent],
  exports: [CockpitHeaderComponent]
})
export class CockpitModule {}
