/**
 * Created by mohma on 7/26/2017.
 */
import { NgModule } from '@angular/core';
import { Routes,
  RouterModule } from '@angular/router';
import { MainWidgetComponent} from "./main.component";

const routes: Routes = [
  {
    path: '',
    component: MainWidgetComponent,
    data: {
      title: 'Form'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainWidgetRoutingModule {}
