import { Injectable } from '@angular/core';
import { SignUp } from './sign-up';
import { HttpClient } from '@angular/common/http'
import { Password } from './password';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  funds:boolean=false;
  regid:any;
  sharedflag:boolean=false;
  uname:any;
  baseUrl="http://localhost:8088/api/rest";
  
  sharedData!: string; // This part is important for sharing data from one component to other.
  constructor(private http:HttpClient) { }

  getregid(){
    console.log(this.regid);
    return this.regid;
  }
  setregid(data:number){
    this.regid=data;
  }
  getusertype(){
    return this.sharedflag;
  }
  setusertype(data:boolean){
    this.sharedflag=data;
  }
  addNewMember(member:SignUp)
  {
      return this.http.post(this.baseUrl+"/member",member);//replace addmember with the method used in SPRINGBOOT
  }
  updatePassword(newmember:Member) // UPDATE RECORD
  {
    return this.http.put(this.baseUrl+"/changepassword",newmember);// <<<<<<--------Error is here
  }
  login(uname:String,pass:String){
    return this.http.get(this.baseUrl+"/findusers/"+uname+"/"+pass);
  }
  getSchedule(type:number){
    return this.http.get(this.baseUrl+"/dashboard/bookings/"+type);
  }
  getData(Username:String){
    return this.http.get(this.baseUrl+"/member/"+Username);
  }
  getMember(type:number)
  {
      return this.http.get(this.baseUrl+"/dashboard/profile/"+type);//replace addmember with the method used in SPRINGBOOT
  }
  updatewallet(id:number){
    return this.http.get(this.baseUrl+"/UpdateWallet/"+id);
  }
  updatewalletmember(object:Member){
    return this.http.put(this.baseUrl+"/updatewalletmember",object);
  }

  setBalance(){
    this.funds=true;
  }
  getBalance(){
    return this.funds;
  }
}
