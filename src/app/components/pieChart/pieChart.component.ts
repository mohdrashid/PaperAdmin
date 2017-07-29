import {Component, Input} from "@angular/core";
import {PieChart} from "./pieChart";
/**
 * Created by mohma on 7/26/2017.
 */
@Component({
  templateUrl: './pieChart.component.html',
  selector:'pieChart',
  styleUrls: ['./pieChart.scss']
})
export class PieChartComponent {
  @Input('data') properties: PieChart={color:"#30a5ff",current:0,max:100,label:"fa-line-chart"};

  constructor(){
  }

  ngOnInit() {

  }
}
