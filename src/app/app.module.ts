import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPrintModule } from 'ngx-print';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ChngpswdComponent } from './chngpswd/chngpswd.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchbusesComponent } from './searchbuses/searchbuses.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ChngschedComponent } from './chngsched/chngsched.component';
import { ChngbusComponent } from './chngbus/chngbus.component';
import { GetbusComponent } from './getbus/getbus.component';
import { GetscheduleComponent } from './getschedule/getschedule.component';
import { FreqroutesComponent } from './freqroutes/freqroutes.component';
import { LastmnthrecComponent } from './lastmnthrec/lastmnthrec.component';
import { RegnotbkdComponent } from './regnotbkd/regnotbkd.component';
import { ResdetailsComponent } from './resdetails/resdetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }  from '@angular/forms';
import { BusseatsComponent } from './busseats/busseats.component';
import { BusdetailComponent } from './busdetail/busdetail.component';
import { PaymentComponent } from './payment/payment.component';
import { Task1Component } from './task1/task1.component';
import { CardComponent } from './card/card.component';
import { NetbankingComponent } from './netbanking/netbanking.component';
import { WalletComponent } from './wallet/wallet.component';
import { UpiComponent } from './upi/upi.component';
import { UnregDetailsComponent } from './unreg-details/unreg-details.component';
import { PrintPDFComponent } from './print-pdf/print-pdf.component';
import { CancelComponent } from './cancel/cancel.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { UnregorregComponent } from './unregorreg/unregorreg.component';
import { ProceedloginComponent } from './proceedlogin/proceedlogin.component';
import { Payment2Component } from './payment2/payment2.component';
import { RegisteredComponent } from './registered/registered.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    DashboardComponent,
    BookingsComponent,
    ChngpswdComponent,
    ProfileComponent,
    LoginComponent,
    SearchbusesComponent,
    AdmindashboardComponent,
    ChngschedComponent,
    ChngbusComponent,
    GetbusComponent,
    GetscheduleComponent,
    FreqroutesComponent,
    LastmnthrecComponent,
    RegnotbkdComponent,
    ResdetailsComponent,
    BusseatsComponent,
    BusdetailComponent,
    PaymentComponent,
    Task1Component,
    CardComponent,
    NetbankingComponent,
    WalletComponent,
    UpiComponent,
    UnregDetailsComponent,
    PrintPDFComponent,
    CancelComponent,
    UnregorregComponent,
    ProceedloginComponent,
    Payment2Component,
    RegisteredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
