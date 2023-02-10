import { Account } from "./Account.model";
import { SituationCoperative } from "./enum/SituationCoperative.enum";

export class Cooperated {
    constructor(
        public id?: number,
        public name?: string,
        public situation?: SituationCoperative,
        public cpf?: string,
        public account?: Account[]
    ) { }
}