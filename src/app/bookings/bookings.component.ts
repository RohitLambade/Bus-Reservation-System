import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { CommonServiceService } from '../common-service.service';
import { Transaction } from '../transaction';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  uname:any;
  id:any;
  TransArray:any;
  PrintingDataAtStart = "Your Reciept";
  PrintingDataAtEnd = " Thanks for Using our website !!!! ";
  constructor(private commonservice:CommonServiceService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.commonservice.getSchedule(this.id).subscribe(
      (data)=>{
        console.log(data);
        this.TransArray=data as Array <Transaction>;
        console.log(this.TransArray);
         },
         (error)=>
          {
              console.log(error);
          }
    )
  }
  
}
