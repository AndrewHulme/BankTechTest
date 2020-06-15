'strict mode';

class Account {

  constructor(){
    this.transactions = [];
  }

  seeStatement(){
    if (this.transactions.length === 0){
      return 'date || credit || debit || balance'
    } else {

      var transactiondate = this.transactions[0].date
      var transactiontype = this.transactions[0].type
      var transactionamount = this.transactions[0].amount

      return `date || credit || debit || balance\n${transactiondate} || ${transactionamount}.00 || || ${transactionamount}.00`
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
