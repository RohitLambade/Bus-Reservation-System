import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';
import { CommonServiceService } from '../common-service.service';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {
id:any;
sch_id:any;
seats:any;
trans:any;
  constructor(private bser:BusService,private service:CommonServiceService) { }

  ngOnInit(): void {
  }


  cancel()
  {
    this.bser.searchTransaction(this.id).subscribe(
      data=>{
        
        this.trans=data as Transaction
        console.log(data);
        this.trans.cancelled_status="yes";
        this.bser.updateTransaction(this.trans).subscribe(
          data=>{
            console.log(data);
          },
         error=>{
           console.log(error);
         }
        ) 
        this.bser.SchIdFrmBooking(this.id).subscribe(
          data=>{
            this.sch_id=data ;
            console.log(data);
            console.log(this.sch_id);
        this.bser.seatNoFrmBooking(this.id).subscribe(
          data=>{
            this.seats=data as Array<number>;
            console.log(this.seats);
            for(let i=0;i<this.seats.length;i++)
            {
              this.bser.deleteSeat(this.sch_id,this.seats[i]).subscribe(
                data=>{
                  console.log(data)
                  console.log(this.sch_id);
                  if(data)
                  alert("tickets cancelled");
                },
                error=>{
                  console.log(error);
                }
              )
            }
          },
          error=>{
            console.log(error);
          }
        )
       
          },
          error=>{
            console.log(error);
          }
        )
        
    
      },
      error=>{
        console.log(error);
      }
        )
        console.log(this.id);
        this.service.updatewallet(this.id).subscribe(
          data=>{
            console.log(data);
          },
          error=>{
            console.log(error);
          }
        )
    }

  /*cancel()
  {
    this.bser.searchTransaction(this.id).subscribe(
      data=>{
        this.trans=data as Transaction
        console.log(data);
        this.trans.cancelled_status="yes";
        this.bser.updateTransaction(this.trans).subscribe(
          data=>{
            console.log(data);
          },
         error=>{
           console.log(error);
         }
        )
    this.bser.SchIdFrmBooking(this.id).subscribe(
      data=>{
        this.sch_id=data ;
        console.log(data);
        console.log(this.sch_id);
    this.bser.seatNoFrmBooking(this.id).subscribe(
      data=>{
        this.seats=data as Array<number>;
        console.log(this.seats);
        for(let i=0;i<this.seats.length;i++)
        {
          this.bser.deleteSeat(this.sch_id,this.seats[i]).subscribe(
            data=>{
              console.log(data)
              console.log(this.sch_id);
              if(data)
              alert("tickets cancelled");
            },
            error=>{
              console.log(error);
            }
          )
        }
      },
      error=>{
        console.log(error);
      }
    )
   
      },
      error=>{
        console.log(error);
      }
    )
   
   
    

  }*/

}
