import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { CommonServiceService } from '../common-service.service';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  uname:any;
  id:any;
  TransArray:any;
  constructor(private commonservice:CommonServiceService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.commonservice.getSchedule(this.id).subscribe(
      (data)=>{
        console.log(data);
        this.TransArray=data;
        console.log(this.TransArray);
         },
         (error)=>
          {
              console.log(error);
          }
    )
  }
  
}
