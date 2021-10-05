import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-chngbus',
  templateUrl: './chngbus.component.html',
  styleUrls: ['./chngbus.component.css']
})
export class ChngbusComponent implements OnInit {
  bus:Bus;
  constructor(private busserv:BusService) {
    this.bus=new Bus();
   }

  ngOnInit(): void {
  }
  saveBus(busform:any){
    console.log(busform.value);
    this.bus=busform.value;
    this.busserv.addNewBus(this.bus).subscribe(
      (data)=>{
        console.log(data);
        if(data)
        alert("bus added");
      },
      (error)=>{
        console.log(error);
      }
    )
    
  }

}
