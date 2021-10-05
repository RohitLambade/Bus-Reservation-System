import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-busdetail',
  templateUrl: './busdetail.component.html',
  styleUrls: ['./busdetail.component.css']
})
export class BusdetailComponent implements OnInit {
 schedule:any;
 buses:any;
 source:string|any;
 selectedSeats:Array<number>=[0];
 remainingSeats:Array<number>=[0];
    destination:string|any;
    dat:Date|any;
    busArray:any;
    scheduleArray:any;
    sources=["CHENNAI","MUMBAI","BANGALORE"];
    dests=["MUMBAI","CHENNAI","BANGALORE"];
  constructor(private router:Router,private bser:BusService) {
    
   }

  ngOnInit(): void {
    this.bser.getData().subscribe(
      data=>{
        this.schedule=data;
         console.log(this.schedule);
      },
      error=>{
        console.log(error);
      }
    )
    this.bser.getBusData().subscribe(
      data=>{
        this.buses=data;
         console.log(this.buses);
      },
      error=>{
        console.log(error);
      }
    )
  }

  goToBus()
  {
    this.router.navigate(['busseat']);
  }
  search(){
    this.bser.findByJoinB(this.dat,this.source,this.destination).subscribe(
      (data)=>{
        this.busArray=data;
      },
      (error)=>{
        console.log(error);
      }
    )
    this.bser.findByJoinS(this.dat,this.source,this.destination).subscribe(
      (data)=>{
        this.scheduleArray=data as Bus;
        console.log(this.scheduleArray);
        for(let i=0;i<this.scheduleArray.length;i++)
  {
  this.bser.getSelectedSeat(this.scheduleArray[i].schedule_id).subscribe(
    data=>{
      console.log(this.scheduleArray[i].schedule_id);
      this.selectedSeats=data as Array<number> ;
      console.log(this.selectedSeats.length);
      this.remainingSeats[i]=30-this.selectedSeats.length;
      console.log(this.remainingSeats[i]);
    },
    error=>{
      console.log(error);
    }
  )

  }
      },
      (error)=>{
        console.log(error);
      }
    )  
}

cancel()
{
  this.router.navigate(['cancel']);
}

gotologin(){
  this.router.navigate(['login']);
}
gotosignup(){
  this.router.navigate(['signup']);
}
}
 


