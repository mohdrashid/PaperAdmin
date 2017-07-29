/**
 * Created by mohma on 7/26/2017.
 */
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {CommonModule} from "@angular/common";
import {TableWidgetComponent} from "./tables.component";
import {TableWidgetRoutingModule} from "app/widgets/tables/tables-routing";
import {Ng2SmartTableModule} from "ng2-smart-table";


@NgModule({
  imports: [
    FormsModule, ReactiveFormsModule,
    CommonModule,
    TableWidgetRoutingModule,
    Ng2SmartTableModule
  ],
  declarations: [ TableWidgetComponent],
  providers: [  ]
})
export class TablesWidgetModule { }
