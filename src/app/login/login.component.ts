import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from '../common-service.service';
import { Member } from '../member';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  id:any;
  member:Member|any;
  uname:any;
  pswd:any;
  constructor(private commonservice : CommonServiceService, private router:Router) { }


  checkLogin(){
    
    this.commonservice.login(this.uname,this.pswd).subscribe
      (
        (data)=>{
          this.id=data;
          //this.router.navigate(['dashboard',this.id]);
          if(data)
            this.router.navigate(['dashboard',this.id.reguserid,this.id.regusername]);
            this.member=data;
        },
        (error)=>{
            console.log(error);
        }
      )
      //this.router.navigate(['dashboard',this.id]);
      //console.log(this.member.name);
      //this.id=this.member.name;
      //if(this.member == null){
      //  this.router.navigate(['login']);
      //}else{
      //  this.router.navigate(['dashboard',this.id]);
    // }
  }

  /*
  loggedin(){
    this.data = this.member.name;
    this.pswd = this.member.pwd;
    console.log(this.member);
    this.memberArray.push(this.member);
    console.log(this.memberArray);
    this.commonservice.sharedData = this.data;
    if(this.data == "" && this.pswd ==""){
      this.router.navigate(['login']);
    }
    if(this.pswd == "Rohit"){// retrive from backend.
      this.router.navigate(['dashboard']);
    }
    this.member=new Login();
  }*/
  goto(){
    this.router.navigate(['signup']);
  }
  ngOnInit(): void {
    
  }

}
