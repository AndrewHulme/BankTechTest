'strict mode';

class Account {

  constructor(){
    this.transactions = [];
  }

  seeStatement(){
    var statementArray = [];
    var runningTotal = 0;

    this.transactions.forEach(function(transaction){

      if (transaction.type === "deposit"){
        runningTotal += transaction.amount;
        var debitOrCreditAmount = `${transaction.amount}.00 ||`
      } else {
        runningTotal -= transaction.amount;
        var debitOrCreditAmount = `|| ${transaction.amount}.00`
      }

      statementArray.push(`\n${transaction.date} || ${debitOrCreditAmount} || ${runningTotal}.00`);
    });

    statementArray.push('date || credit || debit || balance');
    return statementArray.reverse().toString().replace(/,/g, '');
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
