/**
 * Created by mohma on 7/26/2017.
 */
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { FormComponent} from "./form.component";
import { FormService} from "./form.service";
import { FormRoutingModule} from "./form-routing";
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [
    FormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule
  ],
  declarations: [ FormComponent],
  providers: [ FormService ]
})
export class FormModule { }
