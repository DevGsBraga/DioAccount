import { DioAccount } from "./DioAccount";

export class SavingsAccount extends DioAccount {


    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }



    deposito = (valor:number):void => {
        if(valor <= 0) {
            throw new Error('Deposite um valor acima de 0')
        }
        this.balance += valor + 10
    }
}
