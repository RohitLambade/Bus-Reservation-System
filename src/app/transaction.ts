import { Bus } from "./bus";
import { Member } from "./member";
import { Schedule } from "./schedule";

export class Transaction {
    trans_id:number|any;
    reg_id:number|any;
    unreg_id:number|any;
    total_cost:number|any;
    cancelled_status:String|any;
    dateOfBooking:Date|any;
    schedule:Schedule|any;
    bus_id:Bus|any;

}
