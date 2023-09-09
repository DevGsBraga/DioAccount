import { CompanyAccount } from './class/CompanyAccount'
import { DioAccount } from './class/DioAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SavingsAccount} from './class/savingsaccount'


// CONTA PESSOA FISÍCA

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(150)

//CONTA CONTA JURIDICA
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(100)
console.log(companyAccount)

// CONTA POUPANÇA

const savingsAccount:SavingsAccount = new SavingsAccount('Gabriel', 27)
savingsAccount.deposito(100)
console.log(savingsAccount)
savingsAccount.deposito(100)
console.log(savingsAccount)


