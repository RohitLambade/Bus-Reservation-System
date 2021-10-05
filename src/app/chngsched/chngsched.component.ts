import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus';
import { BusService } from '../bus.service';
import { Schedule } from '../schedule';
import { Schedule1 } from '../schedule1';

@Component({
  selector: 'app-chngsched',
  templateUrl: './chngsched.component.html',
  styleUrls: ['./chngsched.component.css']
})
export class ChngschedComponent implements OnInit {
  
  schedule_id:any;
  date_Of_Jrny:any;
  s:any;
  schdbus:Schedule;
  busid:any;

  constructor(private busserv:BusService) {
    this.schdbus=new Schedule();
   }
   ngOnInit(): void {
  }
  saveSchedule(scheduleform:any){
    this.schdbus=scheduleform.value;
    console.log(this.schdbus);
    this.busserv.addNewSchedule(this.schdbus,this.busid).subscribe
      (
        (data)=>{
          console.log(data);
          if(data)
            alert("Member Added Successfully!");
        },
        (error)=>{
            console.log(error);
        }
      )
  }
  /*
  saveSchedule(scheduleform:any){
    this.busserv.addNewSchedule2(this.schdbus,this.schedule_id,this.busid).subscribe(
      (data)=>{
        console.log(data);
        if(data)
        {console.log(data);
        alert("schedule added"); }
      },
      (error)=>{
        console.log(error);
      }

    )
  }
  */

  /*
  constructor(private busserv:BusserviceService) {
    this.schdbus=new Schedule1();
    this.s=new Schedule();
   }

  ngOnInit(): void {
  }

  saveSchedule(scheduleform:any){
    console.log(scheduleform.value);    
    this.schdbus=scheduleform.value;
    this.s=this.schdbus;
    console.log(this.s);
    console.log(this.schdbus);
    
    this.busserv.addNewSchedule(this.schdbus,this.busid).subscribe(
      (data)=>{
        console.log(data);
        if(data)
        {console.log(data);
        alert("schedule added"); }
      },
      (error)=>{
        console.log(error);
      }

    )
    
  }
  */

}
