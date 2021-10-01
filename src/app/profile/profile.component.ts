import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  id:any;
  ProfArray:any;
  constructor( private activeRoute:ActivatedRoute, private commonservice:CommonServiceService) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.commonservice.getMember(this.id).subscribe(
      (data)=>{
        this.ProfArray=data;
         },
         (error)=>
          {
              console.log(error);
          }
    )
  }
}
