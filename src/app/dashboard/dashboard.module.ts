/**
 * Created by mohma on 7/26/2017.
 */
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {DashboardComponent} from "./dashboard.component";
import {DashboardService} from "./dashboard.service";
import {DashboardRoutingModule} from "./dashboard-routing";
import {StatsCardComponent} from "../components/statsCard/statsCard.component";
import { ChartsModule } from 'ng2-charts';
import {RoundProgressModule} from "angular-svg-round-progressbar";
import {PieChartComponent} from "../components/pieChart/pieChart.component";
import {CommonModule} from "@angular/common";
import {Ng2Timeline} from 'ng2-timeline';
import {Ng2NewsList} from "../components/ng2-newslist/ng2newslist.module";


@NgModule({
  imports: [
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ChartsModule,
    RoundProgressModule,
    CommonModule,
    Ng2Timeline,
    Ng2NewsList
  ],
  declarations: [ DashboardComponent, StatsCardComponent,PieChartComponent],
  providers: [ DashboardService ]
})
export class DashboardModule { }
