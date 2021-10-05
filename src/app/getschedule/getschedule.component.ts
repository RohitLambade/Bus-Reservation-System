import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';
@Component({
  selector: 'app-getschedule',
  templateUrl: './getschedule.component.html',
  styleUrls: ['./getschedule.component.css']
})
export class GetscheduleComponent implements OnInit {
  scheduleArray :any;
  status:any;
  errorMessage:any;
  constructor(private busserv:BusService) { }

  ngOnInit(): void {
    this.busserv.getScheduleForAdmin().subscribe(
      (data)=>{
        console.log(data);
        this.scheduleArray=data;
        console.log(this.scheduleArray);
         },
         (error)=>
          {
              console.log(error);
          }
    )
  }
/*
  delSchedule(scheduleid:any){
    this.busserv.deleteSchedule(scheduleid).subscribe(
      {
        next:data=>{
            this.status="Delete Successful";
        },
        error:error=>{
          this.errorMessage=error.message;
          console.error("There was an error",error);
        }
      }
    )
  */  
  }
