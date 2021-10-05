import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  reg_id:any;
  flag:boolean|any;
  constructor(private router:Router,private activeRoute:ActivatedRoute,private service:CommonServiceService) {
   }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      params=>{
        this.reg_id=params.get("id");
        console.log(this.reg_id);
       
      }
    );
    this.activeRoute.paramMap.subscribe(
      params=>{
        this.flag=params.get("flag");
        console.log(this.flag);
        this.service.setusertype(this.flag);
        this.service.setregid(this.reg_id);       
      }
    );
  }

  netBanking()
  {
    this.router.navigate(['netbanking']);
  }
  card()
  {
    this.router.navigate(['card']);
  }
  UPI()
  {
    this.router.navigate(['upi']);
  }
  wallet()
  {
    this.router.navigate(['wallet']);
  }

}
