import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  submit()
  {
this.router.navigate(['PDF']);
  }

}
