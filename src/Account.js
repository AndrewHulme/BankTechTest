'strict mode';

class Account {

  constructor(){
    this.transactions = [];
  }

  seeStatement(){
    var statementArray = [];
    var runningTotal = 0

    this.transactions.forEach(function(transaction){
      var transactionDate = transaction.date
      var transactionAmount = transaction.amount
      runningTotal += transaction.amount

      statementArray.push(`\n${transactionDate} || ${transactionAmount}.00 || || ${runningTotal}.00`)
    });

    statementArray.push('date || credit || debit || balance')

    return statementArray.reverse().toString().replace(/,/g, '')
  }

  deposit(amount){
    this.transactions.push({date: this._checkCurrentDate(), type: "deposit", amount: amount})
  }


  _checkCurrentDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    return dd + '/' + mm + '/' + yyyy;
  }

}
