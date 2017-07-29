/**
 * Created by mohma on 7/26/2017.
 */
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { FormComponent} from "./form.component";
import { FormService} from "./form.service";
import { FormRoutingModule} from "./form-routing";


@NgModule({
  imports: [
    FormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule],
  declarations: [ FormComponent],
  providers: [ FormService ]
})
export class FormModule { }
