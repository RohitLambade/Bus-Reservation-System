import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unregorreg',
  templateUrl: './unregorreg.component.html',
  styleUrls: ['./unregorreg.component.css']
})
export class UnregorregComponent implements OnInit {

  flag:boolean=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotopaymentagain(){
    this.router.navigate(['payment2',this.flag])
  }
  gotologin(){
    this.router.navigate(['proceedlogin',this.flag]);
  }
}
