import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bus } from '../bus';
import { BusService } from '../bus.service';
import { Seat } from '../seat';

@Component({
  selector: 'app-busseats',
  templateUrl: './busseats.component.html',
  styleUrls: ['./busseats.component.css']
})
export class BusseatsComponent implements OnInit {
busClass:Seat;
  constructor(private router:Router,private activeRoute:ActivatedRoute,private bserv:BusService) {
    this.busClass=new Seat();
   }
  sch_id1:any;
  bus_id:any;
  selectedSeats:any;
  seatcolor:Array<string>=[];
  seats:Array<number>=[];
  busdetails:any;
  
 cost:any;
 seatsBookingcost:number=0;
 // s:Array<boolean>=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
  s1:Array<number>=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      params=>{
        this.sch_id1=params.get("schedule_id") as string;
        console.log(this.sch_id1);
       
      }
    );
    this.activeRoute.paramMap.subscribe(
      params=>{
        this.bus_id=params.get("busid") as string;
        console.log(this.bus_id);
       
      }
    );
    this.bserv.getCostBybusId(this.bus_id).subscribe(
      data=>{
        this.cost=data;
        console.log(this.cost);
      },
      error=>{
         console.log(error);
      }
    )
    this.bserv.getSelectedSeat(this.sch_id1).subscribe(
      data=>{
        this.selectedSeats=data;
        console.log(this.selectedSeats);
        for(let i of this.selectedSeats)
        {
          this.s1[i-1]=3;
          this.seatcolor[i-1]="background-color: crimson;";
          
        }
      },
      error=>{
        console.log(error)
      }
    )
    
    this.bserv.getbusDetails(this.bus_id).subscribe(
      data=>{
         this.busdetails=data as Bus;
         console.log(data);
      },
      error=>{
        console.log(error);
      }
    )
   
    
  }
 

 
 
  makePayment()
  {
    if(this.seats.length>0)
    {
      console.log(this.sch_id1);
      this.bserv.setScheduleIdAndSeatsAndCostAndBusId(this.sch_id1,this.seats,this.seatsBookingcost,this.bus_id);
      this.bserv.setbusDetailsbyID(this.busdetails);
      /*console.log(this.sch_id1);

      this.busClass.sch_id=this.sch_id1;
      this.busClass.available="yes";
      for(let i=0;i<this.seats.length;i++)
      {
       this.busClass.seatNo=this.seats[i];
       this.bserv.addSeat(this.busClass).subscribe(
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
    */
     this.router.navigate(['unregorreg'])
    }
  }

  seat1(k:any)
  {
    if(this.s1[k-1]==1)
  {
    this.seats.push(k);
    this.seatcolor[k-1]="background-color: greenyellow;";
   
    console.log(this.seats);
    this.s1[k-1]=2;
  }
  else if(this.s1[k-1]==2){
    this.seatcolor[k-1]="background-color: rgba(240, 255, 240, 0.562);";
 
    for(let i=0;i<this.seats.length;i++)
    {
      if(this.seats[i]==k)
            this.seats.splice(i,1);
    }
  
    console.log(this.seats);
    this.s1[k-1]=1;
  }
  this.seatsBookingcost=this.cost * this.seats.length; 
}



}
