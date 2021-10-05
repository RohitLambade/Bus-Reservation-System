import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { Schedule } from './schedule';
import { Bus } from './bus';
import { Schedule1 } from './schedule1';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  

  baseURL:string="http://localhost:8088/api/rest";
  constructor(private http:HttpClient) {
    this.trans=new Transaction();
   }
 ScheduleID:any;
 Seats:any;
 costOfBooking:any;
 bus_id:any;
 trans:Transaction;
 busDetailsbyId:any;

getbusDetails(data:any){
  return this.http.get(this.baseURL+"/buses/"+data);
}

setbusDetailsbyID(data:any){
  this.busDetailsbyId=data;
 }
getbusDetailsbyID(){
 return this.busDetailsbyId;
 }
 
  getData()
  {
  
  return this.http.get(this.baseURL+"/Schedule");
  //  return this.vehicleArray;
  }
  getSelectedSeat(data:any)
  {
    return this.http.get(this.baseURL+"/seatbySch/"+data);
  }
  addSeat(data:any)
  {
    return this.http.post(this.baseURL+"/seats",data);
  }
  setScheduleIdAndSeatsAndCostAndBusId(data1:any,data2:any,data3:any,data4:any)
  {
 this.ScheduleID=data1;
 this.Seats=data2;
 this.costOfBooking=data3;
 this.bus_id=data4;
  }
  setTransaction(data:Transaction)
  {
    this.trans=data;
  }
  getCurrentTransaction()
  {
    return this.trans;
  }
  getScheduleId()
  {
    return this.ScheduleID;
  }
  getSeats()
  {
    return this.Seats;
  }
  getTotalCost()
  {
    return this.costOfBooking;
  }
  getBusId()
  {
    return this.bus_id;
  }
  getCostBybusId(data:any)
  {
    return this.http.get(this.baseURL+"/CostByBusId/"+data);
  }
  getBusData()
  {
    return this.http.get(this.baseURL+"/buses");
  }

  getSchedule(data:any)
  {
    return this.http.get(this.baseURL+"/Schedule/"+data);
  }
  addTransaction(data:Transaction)
  {
    return this.http.post(this.baseURL+"/Transaction",data);
  }
  addBooking(data:any)
  {
    return this.http.post(this.baseURL+"/Booking",data); 
  }
  addUnRegUser(data:any)
  {
    return this.http.post(this.baseURL+"/unreg",data);
  }
  updateUnRegUser(data:any)
  {
    return this.http.put(this.baseURL+"/unreg",data);
  }
  updateSeattrans_id(data:any)
  {
    return this.http.put(this.baseURL+"/seats",data);
  }
  searchTransaction(data:any)
  {
    return this.http.get(this.baseURL+"/Transaction/"+data);
  }
  updateTransaction(data:any){
    return this.http.put(this.baseURL+"/Transaction",data);
  }
  getTransaction()
  {
    return this.http.get(this.baseURL+"/Transaction");
  }
  findByDate_Of_Jrny(d:Date){
    return this.http.get(this.baseURL+"/finddates/"+d);
  }
  searchSourceAndDestination(src:string,dest:string){
    return this.http.get(this.baseURL+"/findsrcdest/sourceanddestination?src="+src+"&dest="+dest);
  }
  findByJoinS(d:Date,src:string,dest:string){
    return this.http.get(this.baseURL+"/finddates/"+d+"/"+src+"/"+dest);
  }
  findByJoinB(d:Date,src:string,dest:string){
    return this.http.get(this.baseURL+"/finddatesbus/"+d+"/"+src+"/"+dest);
  }
 /* searchBySCheduleIdAndSeatNo(data1:any,data2:any)
  {
    return this.http.get(this.baseURL+"/srchByScheduleIdAndSeatNo/"+data1+"/"+data2);
  }
  findBySeatId(data:any)
  {
    return this.http.get(this.baseURL+"/seats"+data);
  }*/

  changeTransactionStatus(data:any)
  {
    return this.http.get(this.baseURL+"/changeStatus/"+data);
  }
  SchIdFrmBooking(data:any)
  {
    return this.http.get(this.baseURL+"/SchIdFrmBooking/"+data);
  }
  seatNoFrmBooking(data:any){
    return this.http.get(this.baseURL+"/seatNoFrmBooking/"+data);
  }
  deleteSeat(data1:any,data2:any){
    return this.http.delete(this.baseURL+"/deleteSeat1/"+data1+"/"+data2);
  }

  //Rohit


  profits()
    {
      return this.http.get(this.baseURL+"/profit"); //add path
    }

  addNewSchedule2(schedule:Schedule,schedule_id:any,busid:any){
    return this.http.post(this.baseURL+"/schedule/"+schedule_id+"/"+busid,schedule);
  }
  addNewBus(bus:Bus)
  {
      return this.http.post(this.baseURL+"/bus",bus);
  }
  addNewSchedule(schedule:Schedule1,busid:any)
  {
      console.log(schedule);
      return this.http.post(this.baseURL+"/schedule/"+busid,schedule);
  }
  
  getBus()
  {
     //return this.http.get(this.baseUrl+"/bus");
     return this.http.get(this.baseURL+"/bus");
  }
  getScheduleForAdmin()
  {
     return this.http.get(this.baseURL+"/schedule");
  }
  getTransactionForLastMonth()
  {
    return this.http.get(this.baseURL+"/transaction/dateofpayment"); //add path
 }
 getUserNotBooked(){ 
    return this.http.get(this.baseURL+"/registered/notbooked"); //add path
   }
getTransactionForUser(ruserid:Number)
    {
        return this.http.get(this.baseURL+"/transaction/"+ruserid); //add path
    }  

    getFrequentRoutes(){
        return this.http.get(this.baseURL+"/transaction/preferredbus");
    }
getCostOfBooking(){
  return this.costOfBooking;
}
}
