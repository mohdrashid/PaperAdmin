/**
 * Created by mohma on 7/26/2017.
 */
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { MainWidgetComponent} from "./main.component";
import { MainWidgetRoutingModule} from "./main-routing";
import {ListViewCRUDComponent} from "ng2-listview-crud";
import {CommonModule} from "@angular/common";
import {CalendarComponent} from "../../components/calendar/calendar.component";
import {AlertComponent} from "../../components/alert/alert.component";


@NgModule({
  imports: [
    FormsModule, ReactiveFormsModule,
    MainWidgetRoutingModule,
    CommonModule
  ],
  declarations: [ MainWidgetComponent, CalendarComponent, ListViewCRUDComponent, AlertComponent],
  providers: [  ]
})
export class MainWidgetModule { }
