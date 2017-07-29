/**
 * Created by mohma on 7/26/2017.
 */
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {CommonModule} from "@angular/common";
import {TableWidgetComponent} from "./tables.component";
import {TableWidgetRoutingModule} from "app/widgets/tables/tables-routing";


@NgModule({
  imports: [
    FormsModule, ReactiveFormsModule,
    CommonModule,
    TableWidgetRoutingModule
  ],
  declarations: [ TableWidgetComponent],
  providers: [  ]
})
export class TablesWidgetModule { }
