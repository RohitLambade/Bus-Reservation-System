import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment2',
  templateUrl: './payment2.component.html',
  styleUrls: ['./payment2.component.css']
})
export class Payment2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
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
}
