import { EmailValidator } from "@angular/forms";
import { Transaction } from "./transaction";

export class Unreg {
    unreg_id:number|undefined;
    email:EmailValidator|undefined;
    transaction:Transaction|undefined;
    name:string|undefined;
}
