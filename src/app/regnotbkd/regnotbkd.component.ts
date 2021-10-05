import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-regnotbkd',
  templateUrl: './regnotbkd.component.html',
  styleUrls: ['./regnotbkd.component.css']
})
export class RegnotbkdComponent implements OnInit {
  regArray:any;
  constructor(private busserv:BusService) { }

  ngOnInit(): void {
    this.busserv.getUserNotBooked().subscribe(
      (data)=>{
        console.log(data);
        this.regArray=data;
        console.log(this.regArray);
         },
         (error)=>
          {
              console.log(error);
          }
    )
  }

}
