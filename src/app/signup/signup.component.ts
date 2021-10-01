import { Component, OnInit } from '@angular/core';
import { SignUp } from '../sign-up';
import { CommonServiceService } from '../common-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  member:SignUp
  //memberArray=new Array <SignUp> ();

  data:any;
  pswd:any;
  constructor(private commonservice : CommonServiceService, private router:Router) {
    this.member=new SignUp();
   }
  //saveData(){
    //this.data = this.member.name;
   // this.pswd = this.member.pwd;
   // console.log(this.member);
    //this.memberArray.push(this.member);
    //console.log(this.memberArray);
   // this.commonservice.sharedData= this.data;
    //if(this.data == null && this.pswd == null ){
    //  this.router.navigate(['signup']);
    //}else{
      // WRITE CODE HERE TO STORE THE DATA TO DATABASE
    //  this.router.navigate(['login']);
   // }
   // this.member=new SignUp();
  //}
  ngOnInit(): void {
  }
  addCustomer(signupForm:any){
    console.log(signupForm.value);
    if(signupForm.value == null){
      this.router.navigate(['signup']);
    }else{
      this.router.navigate(['login']);
   }
      this.member=signupForm.value;
      this.commonservice.addNewMember(this.member).subscribe
      (
        (data)=>{
          console.log(data);
          if(data)
            alert("Member Added Successfully!");
        },
        (error)=>{
            console.log(error);
        }
      )
  }
}
