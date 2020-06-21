import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GridRoutingModule } from "./grid-routing.module";
import { GridComponent } from "./grid.component";
import { NavigationModule } from "../navigation/navigation.module";

@NgModule({
  imports: [CommonModule, GridRoutingModule, NavigationModule],
  declarations: [GridComponent],
})
export class GridModule {}
