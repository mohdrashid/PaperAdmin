import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FullLayoutComponent} from "./layout/full-layout.component";

// Layouts
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule'
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        data:{
          title2:"Dashboard"
        }
      },
      {
        path: 'form',
        loadChildren: './form/form.module#FormModule'
      },
      {
        path:'widget',
        children:[
          {
            path: '',
            pathMatch: 'full',
            redirectTo:'widget/main'
          },
          {
            path: 'main',
            loadChildren: './widgets/main/main.module#MainWidgetModule'
          },
          {
            path: 'table',
            loadChildren: './widgets/tables/tables.module#TablesWidgetModule'
          },
          {
            path: 'chart',
            loadChildren: './widgets/charts/charts.module#ChartsWidgetModule'
          }
        ]
      }

    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
