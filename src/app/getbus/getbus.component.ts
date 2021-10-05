import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-getbus',
  templateUrl: './getbus.component.html',
  styleUrls: ['./getbus.component.css']
})
export class GetbusComponent implements OnInit {
  busArray:any;
  constructor(private busserv:BusService) { }

  ngOnInit(): void {
    this.busserv.getBus().subscribe(
      (data)=>{
        console.log(data);
        this.busArray=data;
        console.log(this.busArray);
         },
         (error)=>
          {
              console.log(error);
          }
    )
  }
  /*
  delete(id:String)
  {
  this.busserv.deleteBus(id).subscribe(
    (data)=>{
      console.log("deleted");

  },
  (error)=>{
    console.log(error);
  }
  )
}*/
}
