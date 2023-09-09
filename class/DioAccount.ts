export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value:number) => {
    if(value <= 0){
      throw new Error('O valor depositado deve ser maior que 0')
      }
      this.balance += value

  }

  withdraw = (valor:number): void => {
    if(valor <= 0) {
      throw new Error('O valor do saque deve ser maior que 0')
    } if(valor > this.balance){
      throw new Error('Saldo insuficiente')
  }
    this.balance -= valor
}

  getBalance = ():void => {
   console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}


