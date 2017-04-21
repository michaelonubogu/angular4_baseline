import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { RouteGenerator } from './utils/module_loader';

let routeGenerator = new RouteGenerator();
let app_routes: Routes = [];

app_routes = app_routes.concat(routeGenerator.generateRoutes());
@NgModule({
  imports: [
    RouterModule.forRoot(app_routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}