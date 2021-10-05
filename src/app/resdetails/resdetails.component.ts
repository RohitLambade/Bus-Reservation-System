import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-resdetails',
  templateUrl: './resdetails.component.html',
  styleUrls: ['./resdetails.component.css']
})
export class ResdetailsComponent implements OnInit {
  transArray:any;
  constructor(private busserv:BusService) { }
  ruserid:any
  ngOnInit(): void {
  }

  resdetailsonclick(){
    this.busserv.getTransactionForUser(this.ruserid).subscribe(
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
  }

}
