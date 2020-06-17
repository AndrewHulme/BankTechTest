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
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    return dd + '/' + mm + '/' + yyyy;
  }

}
