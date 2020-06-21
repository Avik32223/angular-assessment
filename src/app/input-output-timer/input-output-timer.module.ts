import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { InputOutputTimerRoutingModule } from "./input-output-timer-routing.module";
import { InputOutputTimerComponent } from "./input-output-timer.component";
import { DisplayComponent } from "./display/display.component";
import { FormsComponent } from "./forms/forms.component";
import { LoggerComponent } from "./logger/logger.component";
import { CounterStatusComponent } from "./counter-status/counter-status.component";
import { NavigationModule } from "../navigation/navigation.module";

@NgModule({
  imports: [
    CommonModule,
    InputOutputTimerRoutingModule,
    FormsModule,
    NavigationModule,
  ],
  declarations: [
    InputOutputTimerComponent,
    DisplayComponent,
    FormsComponent,
    LoggerComponent,
    CounterStatusComponent,
  ],
})
export class InputOutputTimerModule {}
