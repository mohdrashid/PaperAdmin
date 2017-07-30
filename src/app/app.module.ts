import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LocationStrategy, CommonModule, PathLocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';

// Routing Module
import { AppRoutingModule } from './app.routing';
import { FullLayoutComponent} from './layout/full-layout.component';
import {Ng2AutoBreadCrumbComponent} from 'ng2-auto-breadcrumb';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  declarations: [
    FullLayoutComponent,
    AppComponent,
    Ng2AutoBreadCrumbComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: PathLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
