import { TypeAccount } from './enum/TypeAccount.enum';
import { BankAccount } from './enum/BanckAccount.enum';

export class Account {
    constructor(
        public id?: number,
        public bank?: BankAccount,
        public type?: TypeAccount,
        public number?: number
    ) {
        
    }
}