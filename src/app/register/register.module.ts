import { NgModule } from '@angular/core';
import { RegisterComponent} from "./register.component";
import { RegisterRoutingModule} from "./register-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterService} from "./register.service";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [ RegisterComponent],
  providers: [ RegisterService ]
})
export class RegisterModule { }
