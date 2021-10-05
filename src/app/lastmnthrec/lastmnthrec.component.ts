import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-lastmnthrec',
  templateUrl: './lastmnthrec.component.html',
  styleUrls: ['./lastmnthrec.component.css']
})
export class LastmnthrecComponent implements OnInit {
  transArray:any;
  prof:number|any;
  constructor(private busserv:BusService) { 
  }
  ngOnInit(): void {
    this.busserv.getTransactionForLastMonth().subscribe(
      (data)=>{
        console.log(data);
        this.transArray=data;
        console.log(this.transArray);
         },
         (error)=>
          {
              console.log(error);
          }
    )
    this.busserv.profits().subscribe(
      (data)=>{
        console.log(data);
        this.prof=data;
         },
         (error)=>
          {
              console.log(error);
          }
    )
  }

}
