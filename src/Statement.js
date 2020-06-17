'strict mode';

class Statement {

  createStatement(transactions){
    var statementArray = [];
    var runningTotal = 0;

    transactions.forEach(function(transaction){

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

}
