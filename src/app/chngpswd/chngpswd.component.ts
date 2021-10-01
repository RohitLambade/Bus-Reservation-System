import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonServiceService } from '../common-service.service';
import { Member } from '../member';

@Component({
  selector: 'app-chngpswd',
  templateUrl: './chngpswd.component.html',
  styleUrls: ['./chngpswd.component.css']
})
export class ChngpswdComponent implements OnInit {

  Newmember:Member;
  Username:String|any;
  Password:String|any;
  id:any;
  //oldPassword =""; //using a new service we can change the password in backend
  //newPassword =""; //using a new service we can change the password in backend
  constructor(private commonservice:CommonServiceService,private router:Router,private activeRoute:ActivatedRoute) { 
    this.Newmember=new Member();
  }

  ngOnInit(): void {
    
  }
  updatePassword(){
    this.commonservice.getData(this.Username).subscribe
    (
      (data)=>{
        if(data)
          this.Newmember = data as Member;
          this.Newmember.regpassword=this.Password;
          this.commonservice.updatePassword(this.Newmember).subscribe
    (
      (data)=>{
        if(data)
          console.log(data);
      },
      (error)=>{
          console.log(error);
      }
    )
      },
      (error)=>{
          console.log(error);
      }
    )
    
  }

}
