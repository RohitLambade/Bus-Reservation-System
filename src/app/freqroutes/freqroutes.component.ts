import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';
@Component({
  selector: 'app-freqroutes',
  templateUrl: './freqroutes.component.html',
  styleUrls: ['./freqroutes.component.css']
})
export class FreqroutesComponent implements OnInit {
busArray:any;
//lis:any;
  constructor(private busserv:BusService) { }

  ngOnInit(): void {this.busserv.getFrequentRoutes().subscribe(
    (data)=>{
      console.log(data);
      //this.lis=data;
      this.busArray=data;
      console.log(this.busArray);
       },
       (error)=>
        {
            console.log(error);
        }
  )
  }

}
