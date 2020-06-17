'strict mode';

class Account {

  constructor(statement_class = new Statement){
    this.transactions = [];
    this.statement_class = statement_class;
  }

  seeStatement(){
    return this.statement_class.createStatement(this.transactions)
  }

  deposit(amount){
    this.transactions.push({date: this._checkCurrentDate(), type: "deposit", amount: amount});
  }

  withdraw(amount){
    this.transactions.push({date: this._checkCurrentDate(), type: "withdrawal", amount: amount});
  }

  _checkCurrentDate(){
    return this.statement_class._checkCurrentDate()
  }

}
