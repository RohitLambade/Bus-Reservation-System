import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { ChngpswdComponent } from './chngpswd/chngpswd.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard/:id/:name', component: DashboardComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'dashboard/bookings/:id',component:BookingsComponent},
  {path:'dashboard/chngpswd/:id',component:ChngpswdComponent},
  {path:'dashboard/profile/:id',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
