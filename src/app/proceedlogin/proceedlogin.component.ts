import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonServiceService } from '../common-service.service';
import { Member } from '../member';

@Component({
  selector: 'app-proceedlogin',
  templateUrl: './proceedlogin.component.html',
  styleUrls: ['./proceedlogin.component.css']
})
export class ProceedloginComponent implements OnInit {

  flag:boolean|any;
  id:any;
  uname:any;
  pswd:any;
  member:Member|any;
  constructor(private commonservice:CommonServiceService, private router:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.flag = this.activeRoute.snapshot.paramMap.get('flag');
  }

  checkLogin(){
    this.commonservice.login(this.uname,this.pswd).subscribe
      (
        (data)=>{
          this.id=data;
          //this.router.navigate(['dashboard',this.id]);
          if(data)
            this.flag=true;
            this.router.navigate(['payment',this.id.reguserid,this.flag]);
            this.member=data;
        },
        (error)=>{
            console.log(error);
        }
      )
  }
}
