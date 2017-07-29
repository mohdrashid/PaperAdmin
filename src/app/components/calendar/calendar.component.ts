/**
 * Created by mohma on 7/27/2017.
 */
import {Component, Input} from "@angular/core";
import {Calendar} from "./calendar";
declare let $:any;


@Component({
  templateUrl:'calendar.component.html',
  selector:'calendar',
  styleUrls: ['/calendar.scss']
})

export class CalendarComponent {
  public calendar:any;
  @Input('data') properties:Calendar={color:"red",icon:"fa fa-calendar",label:"Calendar",font:"#ececec",id:"calendar1",click:function($event){
    console.log($event);
  }};


  constructor(){
  }

  ngOnInit(){
    this.properties.icon+=" fa-fw";
  }

  ngAfterViewInit() {
    $("#"+this.properties.id).datepicker({});
  }

  /**
   *
   * @param $event: Event details generated from click event
   * Passes object of type JSON to callback
   * Sample: Object {event: MouseEvent, value: "13", month: "July", year: "2017"}
   */
  onCalendarClick($event){
    let data={event:$event,value:$event['target']['innerText']};
    let chosen=$(".datepicker-switch")[0].innerText.split(" ");
    data['month']=chosen[0];
    data['year']=chosen[1];
    this.properties.click(data)
  }
}
