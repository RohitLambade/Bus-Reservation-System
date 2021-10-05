import { Bus } from "./bus";
import { Schedule } from "./schedule";
import { Transaction } from "./transaction";

export class Booking {

    booking_id:number|undefined;
    trans_id:Transaction|undefined;
    no_of_seats:number|undefined;
    seatNo:number|undefined;
    sch_id:Schedule|undefined;
}
