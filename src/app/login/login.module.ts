import { NgModule } from '@angular/core';
import {LoginComponent} from "./login.component";
import {LoginRoutingModule} from "./login-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginService} from "./login.service";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [ LoginComponent],
  providers: [ LoginService ]
})
export class LoginModule { }
