class BankAccount {
  constructor(ownerName, accountNumber, balance = 0) {
    this.ownerName = ownerName;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`${this.ownerName} balans: ${this.balance}`);
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
    console.log(`${this.ownerName} balans: ${this.balance}`);
  }
  showBalance() {
    console.log(`${this.ownerName} joriy balans: ${this.balance}`);
  }
}
const acc1 = new BankAccount("Ali", "001");
const acc2 = new BankAccount("Vali", "002", 500);
acc1.deposit(200);
acc1.withdraw(50);
acc1.showBalance();
acc2.deposit(300);
acc2.withdraw(100);
acc2.showBalance();
