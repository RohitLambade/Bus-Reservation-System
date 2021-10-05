import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';
import { CommonServiceService } from '../common-service.service';
import { Member } from '../member';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  constructor(private service:CommonServiceService,private bser:BusService) { }

  differ:any;
  totalcostoftrans:any;
  money:any;
  member:any;
  regid:any;
  ngOnInit(): void {
    this.regid=this.service.getregid();
    console.log(this.regid);
    this.service.getMember(this.regid).subscribe(
      (data)=>{
        this.member = data as Member;
        console.log(data);
        this.money=this.member.wallet;
        this.totalcostoftrans=this.bser.getCostOfBooking();
    this.differ=this.money-this.totalcostoftrans
    if(this.differ<0){
      alert("Insuff Balance");
      this.service.setBalance();
    }else{
      this.member.wallet = this.differ;
      this.service.updatewalletmember(this.member).subscribe(
        (data)=>{
          console.log(data)
        },
        error=>{
          console.log(error);
        }
        
      );
    }
    
      },
      (error)=>{
        console.log(error);
      }
    )
    
  }

  
}
