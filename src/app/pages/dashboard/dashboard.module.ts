import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {nvD3} from 'ng2-nvd3';
import { Enumerations } from '../../utils/enumerations';

/* Module specific components */
import { SparklineDirective } from '../../directives/sparkline.directive';
import { BarChartComponent } from './barchart.component';
import { MultiBarChartComponent } from './multibarchart.component';
import { SparkLineChartComponent } from './sparklinechart.component';
import { DonutChartComponent } from './donutchart.component';
import { StackedAreaChartComponent } from './stackedareachart.component';

import { DashboardComponent } from './dashboard.component';

/* build dashboard page routes */
const dashboard_routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent }
];


@NgModule({
    imports: [RouterModule.forChild(dashboard_routes)],
    declarations: [ 
        DashboardComponent, 
        SparklineDirective, 
        nvD3, 
        BarChartComponent, 
        MultiBarChartComponent, 
        SparkLineChartComponent,
        DonutChartComponent,
        StackedAreaChartComponent 
    ]
})

export default class DashboardsModule { }