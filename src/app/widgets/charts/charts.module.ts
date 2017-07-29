/**
 * Created by mohma on 7/26/2017.
 */
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {CommonModule} from "@angular/common";
import {ChartsWidgetComponent} from "./charts.component";
import {ChartsWidgetRoutingModule} from "./charts-routing";
import {ChartsModule} from "ng2-charts";


@NgModule({
  imports: [
    FormsModule, ReactiveFormsModule,
    CommonModule,
    ChartsWidgetRoutingModule,
    ChartsModule
  ],
  declarations: [ ChartsWidgetComponent],
  providers: [  ]
})
export class ChartsWidgetModule { }
