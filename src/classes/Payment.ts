//Classes 
import { HasFormatter } from "../interfaces/HasFormatter.js"

export class Payment implements HasFormatter{

    constructor( // we can use this only when there are modifiers
        readonly recipient : string,
        private details : string,
        public amount : number
    ){

     
    }

    format() {

        return `${this.recipient} is owed $${this.amount} for ${this.details}`
    }
     
}