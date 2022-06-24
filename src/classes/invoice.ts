//Classes 
import { HasFormatter } from "../interfaces/HasFormatter.js"

export class Invoice implements HasFormatter{

    constructor( // we can use this only when there are modifiers
        readonly client : string,
        private details : string,
        public amount : number
    ){

     
    }

    format() {

        return `${this.client} owes $${this.amount} for ${this.details}`
    }
     
}