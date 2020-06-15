'use strict';

describe('Account', function(){
  var account;
  var today;
  var dd;
  var mm;
  var yyyy;

  beforeEach(function(){
    account = new Account();
    
    today = new Date();
    dd = String(today.getDate()).padStart(2, '0');
    mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
  });

  it('starts off with an empty statement', function(){
    expect(account.transactions).toEqual([])
    expect(account.seeStatement()).toEqual('date || credit || debit || balance');
  });

  it('updates statement when depositing £50 in the account', function(){
    account.deposit(50);
    expect(account.transactions).toEqual([{date: today, type: "deposit", amount: 50}])
    expect(account.seeStatement()).toEqual('date || credit || debit || balance\n15/06/2020 || 50.00 || || 50.00');
  })

});
