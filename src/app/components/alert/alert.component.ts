/**
 * Created by mohma on 7/29/2017.
 */

import {Component, Input} from "@angular/core";
declare let $:any;


@Component({
  templateUrl:'alert.component.html',
  selector:'alert',
})

export class AlertComponent {
  @Input('color') color:string="#ec045b";
  @Input('fontColor') font:string="#ececec";
  @Input('text') text:string="Alert";
  public opacity:number=0;


  public alertHidden:boolean=true;

  ngOnInit(){
    let self=this;
    setTimeout(function(){
      self.alertHidden=false;
      setInterval(function () {
        self.opacity+=0.1;
        //if(self.opacity===1.0)
      },70)
    },500);
  }

  dismiss(){
    this.alertHidden=true;
  }
}
