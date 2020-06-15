'strict mode';

class Account {

  constructor(){
    this.transactions = [];
  }

  seeStatement(){
    var statementarray = [];

    if (this.transactions.length === 0){
      return 'date || credit || debit || balance'
    } else {

      var runningtotal = 0

      this.transactions.forEach(function(transaction){
        var transactiondate = transaction.date
        var transactionamount = transaction.amount
        runningtotal += transaction.amount

        statementarray.push(`\n${transactiondate} || ${transactionamount}.00 || || ${runningtotal}.00`)
      });

      statementarray.push('date || credit || debit || balance')

      return statementarray.reverse().toString().replace(/,/g, '')
    }
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
