/**
 * Created by mohma on 7/26/2017.
 */
import { NgModule } from '@angular/core';
import { Routes,
  RouterModule } from '@angular/router';
import { TableWidgetComponent} from "./tables.component";

const routes: Routes = [
  {
    path: '',
    component: TableWidgetComponent,
    data: {
      title: 'Table'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableWidgetRoutingModule {}
