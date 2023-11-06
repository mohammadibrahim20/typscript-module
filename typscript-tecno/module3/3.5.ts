{
  // access modifiers
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    addDeposit(amount: number) {
      this._balance += amount;
    }
    getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance = 0;
    }
  }

  const goribManAccount = new BankAccount(111, "Mr. Gorib", 20);
  goribManAccount.addDeposit(2);

  //   console.log(goribManAccount);
  const myBalance = goribManAccount.getBalance();
  console.log(myBalance);

  //
}
