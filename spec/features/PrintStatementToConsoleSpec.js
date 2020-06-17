'use strict';

describe('PrintStatementToConsole', function(){
  var account;
  var today;
  var dd;
  var mm;
  var yyyy;

  beforeEach(function(){
    account = new Account();

    today = new Date();
    dd = String(today.getDate()).padStart(2, '0');
    mm = String(today.getMonth() + 1).padStart(2, '0');
    yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
  });


  it('prints the statement to the console, have made some transactions', function(){
    account.deposit(5000.00);
    account.withdraw(100.00);
    account.withdraw(200.00);
    expect(account.seeStatement()).toEqual(`date || credit || debit || balance\n${today} || || 200.00 || 4700.00\n${today} || || 100.00 || 4900.00\n${today} || 5000.00 || || 5000.00`);
  })

});
