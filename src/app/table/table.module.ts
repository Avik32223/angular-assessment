import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TableRoutingModule } from "./table-routing.module";
import { TableComponent } from "./table.component";
import { NavigationModule } from "../navigation/navigation.module";

@NgModule({
  imports: [CommonModule, TableRoutingModule, NavigationModule],
  declarations: [TableComponent],
})
export class TableModule {}
