import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../booking';
import { Bus } from '../bus';
import { BusService } from '../bus.service';
import { Seat } from '../seat';
import { Transaction } from '../transaction';
import { Unreg } from '../unreg';

@Component({
  selector: 'app-unreg-details',
  templateUrl: './unreg-details.component.html',
  styleUrls: ['./unreg-details.component.css']
})
export class UnregDetailsComponent implements OnInit {
  seatClass:Seat;
  trans:Transaction;
  trans1:any;
  book:Booking;
  unreg1:Unreg;
  unreg2:Unreg;
  schedule_1:any;
  seatId:any;
  seat1:any;
  constructor(private bser:BusService,private router:Router) {
    this.seatClass=new Seat();
    this.trans=new Transaction();
    this.book=new Booking();
    this.unreg1=new Unreg();
    this.unreg2=new Unreg();
    
   }
name:any;
email:any;

  scheduleId:any;
 seats:any;
  ngOnInit(): void {
  }

  submit()
  {
    this.scheduleId=this.bser.getScheduleId();
    console.log(this.scheduleId)
    this.seats=this.bser.getSeats();
    console.log(this.seats)
    this.bser.getSchedule(this.scheduleId).subscribe(
     data=>{
       this.schedule_1=data as Bus;
       this.seatClass.schedule=data as Bus;
       this.seatClass.available="yes";
     
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
         this.unreg1.name=this.name;
         this.unreg1.email=this.email;
        
            // this.unreg1.trans_id=this.trans1.trans_id;
          this.bser.addUnRegUser(this.unreg1).subscribe(
               data=>{
                 this.unreg2=data as Unreg;
               
                 console.log(this.unreg2);
                 this.trans.total_cost=this.bser.getTotalCost();
                 console.log(this.trans.total_cost);
                 this.trans.cancelled_status="no";
                 this.trans.reg_id=null;
                 this.trans.unreg_id=this.unreg2.unreg_id;
                 this.trans.bus_id=this.bser.getbusDetailsbyID();
                 this.trans.schedule=this.schedule_1;
                 this.bser.addTransaction(this.trans).subscribe(
           data=>{
             console.log(data);
             this.trans1=data as Transaction;
             console.log(this.trans1);
             console.log(this.trans1.trans_id);
          
             this.bser.setTransaction(this.trans1);
            this.unreg2.transaction=this.trans1;
         
             console.log(this.unreg2);
             this.bser.updateUnRegUser(this.unreg2).subscribe(
               data=>{
                 console.log(data);
                // this.book.transaction.trans_id=this.trans1.trans_id;
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
           },
           error=>{
             console.log(error);
           }
   
         );
               }
             )
               },
               error=>{
                 console.log(error);
               }
             )
     },
     error=>{
       console.log(error);
     }
    )
    
        this.router.navigate(['task1']);
        
  }
}
