import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../booking';
import { Bus } from '../bus';
import { BusService } from '../bus.service';
import { CommonServiceService } from '../common-service.service';
import { Member } from '../member';
import { Schedule } from '../schedule';
import { Seat } from '../seat';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {

  seatClass:Seat|any;
  trans:Transaction|any;
  trans1:any;
  book:Booking|any;
  scheduleId:any;
  seats:any;
  busid:any;
  busclass:Bus;

  schedule_1:any;
  seatId:any;
  seat1:any;
  variable:Member|any;
  data:any;
  uname:any;
  constructor(private service:CommonServiceService,private activeRoute:ActivatedRoute,private bser:BusService,private router:Router) {
    this.seatClass=new Seat();
    this.trans=new Transaction();
    this.book=new Booking();
    this.busclass=new Bus();
   }

  ngOnInit(): void {
    this.uname=this.service.getregid();
    this.service.getMember(this.uname).subscribe
    (
      (data)=>{
        this.variable=data as Member;
        //this.router.navigate(['dashboard',this.id]);
        
      },
      (error)=>{
          console.log(error);
      }
    )
  }
  gotosomething(){
    this.scheduleId=this.bser.getScheduleId();
    console.log(this.scheduleId)
    this.seats=this.bser.getSeats();
    console.log(this.seats)
    this.bser.getSchedule(this.scheduleId).subscribe(
     data=>{
       this.schedule_1=data as Schedule;
       this.seatClass.schedule=data as Schedule;
       this.seatClass.available="yes";
       console.log(this.schedule_1);
     
    for(let i=0;i<this.seats.length;i++)
         {
          this.seatClass.seatNo=this.seats[i];
          console.log(this.seatClass);
          this.bser.addSeat(this.seatClass).subscribe(
           (data)=>{
             console.log(data);
           if(data)
           alert("Seat Added");
         },
         (error)=>{
           console.log(error);
         }
          )
         }
        
         
         this.trans.total_cost=this.bser.getTotalCost();
         console.log(this.trans.total_cost);
         this.trans.cancelled_status="no";
         this.trans.reg_id=this.service.getregid() as number;
         this.trans.unreg_id=null;
         this.busid=this.bser.getBusId();
         console.log(this.busid);
         this.bser.getbusDetails(this.busid).subscribe(
           (data)=>{
            this.busclass=data as Bus;
            console.log(this.busclass);
            this.trans.bus_id=this.busclass;
            this.trans.schedule=this.schedule_1;
         console.log(this.trans);
         this.bser.addTransaction(this.trans).subscribe(
   data=>{
     console.log(data);
     this.trans1=data as Transaction;
     console.log(this.trans1);
     console.log(this.trans1.trans_id);
  
     this.bser.setTransaction(this.trans1);
     this.book.trans_id=this.trans1;
     this.book.no_of_seats=this.seats.length;
     this.book.sch_id=this.schedule_1;
    
    console.log(this.book);
     for(let i=0;i<this.seats.length;i++)
     {
      this.book.seatNo=this.seats[i];
      this.bser.addBooking(this.book).subscribe(
        data=>{
          console.log(data);
          
        },
        error=>{
          console.log(error);
        }
       
      );
     }
    }

 );
       
     
     },
     error=>{
       console.log(error);
     }
    )
           },
           (error)=>{
            console.log(error);
           }
         );
         
    
        this.router.navigate(['task1']);
  }

}
