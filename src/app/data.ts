import { Account } from "./shared/model/Account.model";
import { Cooperated } from "./shared/model/Cooperated.model";
import { BankAccount } from "./shared/model/enum/BanckAccount.enum";
import { SituationCoperative } from "./shared/model/enum/SituationCoperative.enum";
import { TypeAccount } from "./shared/model/enum/TypeAccount.enum";

export const account: Account[] = [
    { id: 1, type: TypeAccount.Aplicacao, bank: BankAccount.Central, number: 123845 },
    { id: 2, type: TypeAccount.Corrente, bank: BankAccount.Viacred, number: 127569 },
    { id: 3, type: TypeAccount.Poupanca, bank: BankAccount.Credifoz, number: 1020467 },
    { id: 4, type: TypeAccount.Poupanca, bank: BankAccount.Transpocred, number: 651862 },
    { id: 5, type: TypeAccount.Corrente, bank: BankAccount.Viacred, number: 984327 }
]

export const cooperated: Cooperated[] = [
    { id: 1, name: "Silvano Pereira", situation: SituationCoperative.Ativo, cpf: "222.222.222-22", account: [account[0], account[2]] },
    { id: 2, name: "Pedro da Silva", situation: SituationCoperative.Bloqueado, cpf: "333.333.333-33", account: [account[1], account[2], account[0]], },
    { id: 3, name: "Derik Cardoso", situation: SituationCoperative.Inativo, cpf: "111.111.111-11", account: [account[2], account[4], account[1], account[0]] },
    { id: 4, name: "David Johnson", situation: SituationCoperative.Inativo, cpf: "142.645.862-23", account: [account[2], account[4], account[0]] },
    { id: 5, name: "Joseph Cox", situation: SituationCoperative.Inativo, cpf: "145.433.984-10", account: [account[0]] },
    { id: 6, name: "Jimmy Soto", situation: SituationCoperative.Inativo, cpf: "532.623.111-22", account: [account[2], account[1], account[0]] },
    { id: 7, name: "Sheila Leonard", situation: SituationCoperative.Inativo, cpf: "222.623.876-19", account: [account[2], account[4], account[0], account[1]] },
    { id: 8, name: "Eric Orozco", situation: SituationCoperative.Inativo, cpf: "524.235.436-17", account: [account[2]] },
    { id: 9, name: "Donna Johnson", situation: SituationCoperative.Inativo, cpf: "189.743.345-70", account: [account[2], account[4], account[1], account[0]] },
    { id: 10, name: "Patricia Sanders", situation: SituationCoperative.Inativo, cpf: "171.191.411-99", account: [account[2]] },
]
