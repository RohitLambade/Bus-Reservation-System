import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../bus';
import { BusService } from '../bus.service';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-print-pdf',
  templateUrl: './print-pdf.component.html',
  styleUrls: ['./print-pdf.component.css']
})
export class PrintPDFComponent implements OnInit {

  constructor(private bserv:BusService,private router:Router) { }
  schedule_id1:any;
  schedulePDF:any;
  seats:any;
  totalCost:any;
  trans:any;
  seatnos:string="";
  ngOnInit(): void {
    this.schedule_id1=this.bserv.getScheduleId();
    this.bserv.getSchedule(this.schedule_id1).subscribe(
      data=>{
        this.schedulePDF=data as Bus;
        console.log(this.schedule_id1);
      },
      error=>{
        console.log(error);
      }
    )
  this.seats=this.bserv.getSeats() as Array<string> ;
  console.log(this.seats)
  this.totalCost=this.bserv.getTotalCost();
  this.trans=this.bserv.getCurrentTransaction() as Transaction;

  for(let i=0;i<this.seats.length-1;i++)
  {
    this.seatnos=this.seatnos+this.seats[i]+","
    console.log(this.seatnos)
  }
  this.seatnos=this.seatnos+this.seats[this.seats.length-1];
  console.log(this.seatnos)
  }
  name = "Project Gladiator PDF";

  gotoHome(){
    this.router.navigate(['']);
  }
}
