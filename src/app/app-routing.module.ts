import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { NestedImageComponent } from "./nested-image/nested-image.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "nested-image", component: NestedImageComponent },
  {
    path: "ecommerce",
    loadChildren: () =>
      import("./ecommerce/ecommerce.module").then((m) => m.EcommerceModule),
  },
  {
    path: "grid",
    loadChildren: () => import("./grid/grid.module").then((m) => m.GridModule),
  },
  {
    path: "iotimer",
    loadChildren: () =>
      import("./input-output-timer/input-output-timer.module").then(
        (m) => m.InputOutputTimerModule
      ),
  },
  {
    path: "stimer",
    loadChildren: () =>
      import("./service-timer/service-timer.module").then(
        (m) => m.ServiceTimerModule
      ),
  },
  {
    path: "table",
    loadChildren: () =>
      import("./table/table.module").then((m) => m.TableModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      enableTracing: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
