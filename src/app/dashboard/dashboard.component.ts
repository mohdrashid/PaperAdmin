/**
 * Created by mohma on 7/26/2017.
 */
import { Component } from '@angular/core';
import {StatsCard} from "../components/statsCard/statsCard";
import {PieChart} from "../components/pieChart/pieChart";

@Component({
  templateUrl: './dashboard.component.html',
  selector:'dashboard'
})
export class DashboardComponent {
  //Card
  public card1:StatsCard={color:"#1ebfae",icon:"fa-users",label:"Users",data:2};
  public card2:StatsCard={color:"#30a5ff",icon:"fa-cogs",label:"Devices",data:2};
  public card3:StatsCard={color:"red",icon:"fa-cogs",label:"sfdsf",data:2};
  public card4:StatsCard={color:"red",icon:"fa-cog",label:"sfdsf",data:2};

  //ProgressBars
  public pbar1:PieChart={color:"blue",max:100,label:"Load",current:2};
  public pbar2:PieChart={color:"red",max:100,label:"Traffic",current:20};
  public pbar3:PieChart={color:"yellow",max:100,label:"Traffic",current:50};
  public pbar4:PieChart={color:"green",max:100,label:"Traffic",current:57};


  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'line';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }


  constructor() {

  }
}


