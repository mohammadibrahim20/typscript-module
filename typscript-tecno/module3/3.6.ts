{
  // getter and setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    get balance() {
      return this._balance;
    }
    set deposit(amount: number) {
      this._balance += amount;
    }
    // addDeposit(amount: number) {
    //   this._balance += amount;
    // }
    // getBalance() {
    //   return this._balance;
    // }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance = 0;
    }
  }

  const goribManAccount = new BankAccount(111, "Mr. Gorib", 20);
  goribManAccount.deposit = 50;
  const myBalance = goribManAccount.balance; // property er moto kore
  console.log(myBalance);

  //
}
