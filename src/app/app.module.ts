import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { NestedImageComponent } from "./nested-image/nested-image.component";
import { HomeComponent } from "./home/home.component";
import { NavigationModule } from "./navigation/navigation.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NestedImageComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NavigationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
