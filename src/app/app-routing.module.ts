import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BusdetailComponent } from './busdetail/busdetail.component';
import { BusseatsComponent } from './busseats/busseats.component';
import { CancelComponent } from './cancel/cancel.component';
import { CardComponent } from './card/card.component';
import { ChngpswdComponent } from './chngpswd/chngpswd.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NetbankingComponent } from './netbanking/netbanking.component';
import { PaymentComponent } from './payment/payment.component';
import { Payment2Component } from './payment2/payment2.component';
import { PrintPDFComponent } from './print-pdf/print-pdf.component';
import { ProceedloginComponent } from './proceedlogin/proceedlogin.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisteredComponent } from './registered/registered.component';
import { SearchbusesComponent } from './searchbuses/searchbuses.component';
import { SignupComponent } from './signup/signup.component';
import { Task1Component } from './task1/task1.component';
import { UnregDetailsComponent } from './unreg-details/unreg-details.component';
import { UnregorregComponent } from './unregorreg/unregorreg.component';
import { UpiComponent } from './upi/upi.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  {path:'',component:BusdetailComponent},//Search module of dharagesh
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'payment/:id/:flag', component: PaymentComponent},
  {path:'dashboard/:id/:name', component: DashboardComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'dashboard/bookings/:id',component:BookingsComponent},
  {path:'dashboard/chngpswd/:id',component:ChngpswdComponent},
  {path:'dashboard/profile/:id',component:ProfileComponent},
  {path:'search/:id',component:SearchbusesComponent},//component added as temporary for Dharagesh module integration
  {path:'admindashboard',component:AdmindashboardComponent},
  {path:'proceedlogin/:flag',component:ProceedloginComponent},
  {path:'payment2/:flag',component:Payment2Component},
  {path:'registered',component:RegisteredComponent},


  {path:'busdetail/:id',component:BusdetailComponent},
  {path:'busdetail',component:BusdetailComponent},
  {path:'busseat/:schedule_id/:busid',component : BusseatsComponent},
  {path:'cancel',component:CancelComponent},
  {path:'card',component:CardComponent},
  {path:'netbanking',component:NetbankingComponent},
  {path:'payment',component:PaymentComponent},
  {path:'PDF',component:PrintPDFComponent},
  {path:'task1',component:Task1Component},
  {path:'unreg',component:UnregDetailsComponent},
  {path:'upi',component:UpiComponent},
  {path:'wallet',component:WalletComponent},
  {path:'unregorreg',component:UnregorregComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
