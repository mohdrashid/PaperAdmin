/**
 * Created by mohma on 7/26/2017.
 */
import {Component, OnInit} from '@angular/core';
import {StatsCard} from "../components/statsCard/statsCard";
import {PieChart} from "../components/pieChart/pieChart";

@Component({
  templateUrl: './dashboard.component.html',
  selector:'dashboard',
  styleUrls:['./dashboard.scss']
})
export class DashboardComponent implements OnInit{
  public chartHeight=35;

  public ChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    mainAspectRatio:false
  };

  ngOnInit(): void {

  }

  //Card

  public card1:StatsCard={color:"#1ebfae",icon:"fa-users",label:"Users",data:50};
  public card2:StatsCard={color:"#30a5ff",icon:"fa-cogs",label:"Items",data:80};
  public card3:StatsCard={color:"#ffb53e",icon:"fa-cogs",label:"Orders",data:90};
  public card4:StatsCard={color:"#f9243f",icon:"fa-cog",label:"Delivered",data:2};

  //ProgressBars
  public pbar1:PieChart={color:"#1ebfae",max:100,label:"Load",current:2};
  public pbar2:PieChart={color:"#30a5ff",max:100,label:"Traffic",current:20};
  public pbar3:PieChart={color:"#ffb53e",max:100,label:"Users",current:50};
  public pbar4:PieChart={color:"#f9243f",max:100,label:"RAM",current:57};


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
}


