import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (valor:number): void => {
    if(DioAccount) {
      this.balance += valor
    } else {
      throw new Error('Conta negativa')
    }
  }
}
