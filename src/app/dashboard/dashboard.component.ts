import { Component, Directive, OnInit,ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  uname:any;
  ProfArray:any;
  pswd:any;
  id:any;
  data : any;
  togglebtn = "";
  constructor(private commonservice:CommonServiceService,private activeRoute:ActivatedRoute,private router:Router) {
    
   }

  ngOnInit(): void {
    //this.data = this.commonservice.sharedData;
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.uname = this.activeRoute.snapshot.paramMap.get('name');


    this.data = this.uname;
  }
  gototrans(){
    this.commonservice.login(this.uname,this.pswd).subscribe
      (
        (data)=>{
          this.id=data;
          //this.router.navigate(['dashboard',this.id]);
          if(data)
            this.router.navigate(['bookings',this.id.reguserid]);
        },
        (error)=>{
            console.log(error);
        }
      )
  }
  gotochngpswd(){
    this.commonservice.login(this.uname,this.pswd).subscribe
      (
        (data)=>{
          this.id=data;
          //this.router.navigate(['dashboard',this.id]);
          if(data)
            this.router.navigate(['chngpswd',this.id.reguserid]);
        },
        (error)=>{
            console.log(error);
        }
      )
  }
  gotoprofile(){
    this.commonservice.login(this.uname,this.pswd).subscribe
      (
        (data)=>{
          this.id=data;
          //this.router.navigate(['dashboard',this.id]);
          if(data)
            this.router.navigate(['profile',this.id.reguserid]);
        },
        (error)=>{
            console.log(error);
        }
      )
  }
  gotodashboard(){
    this.router.navigate(['']); //<<<----Navigating to 
                                //login but has to move to serch page 
  }
  gotoCheckBusses(){
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.commonservice.getMember(this.id).subscribe(
      (data)=>{
        this.ProfArray=data;
        if(data)
            this.router.navigate(['busdetail',this.ProfArray.reguserid]);

         },
         (error)=>
          {
              console.log(error);
          }
    )
  }
}
