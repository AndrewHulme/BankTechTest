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
    mm = String(today.getMonth() + 1).padStart(2, '0');
    yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
  });

  it('starts off with an empty statement', function(){
    expect(account.transactions).toEqual([])
    expect(account.seeStatement()).toEqual('date || credit || debit || balance');
  });

  it('updates statement when depositing £50 in the account', function(){
    account.deposit(50.00);
    expect(account.transactions).toEqual([{date: today, type: "deposit", amount: 50.00}])
    expect(account.seeStatement()).toEqual('date || credit || debit || balance\n15/06/2020 || 50.00 || || 50.00');
  })

  it('updates statement when depositing £100 in the account', function(){
    account.deposit(100.00);
    expect(account.transactions).toEqual([{date: today, type: "deposit", amount: 100.00}])
    expect(account.seeStatement()).toEqual('date || credit || debit || balance\n15/06/2020 || 100.00 || || 100.00');
  })

  it('updates statement when depositing £50 twice in the account', function(){
    account.deposit(50.00);
    account.deposit(50.00);
    expect(account.transactions).toEqual([{date: today, type: "deposit", amount: 50.00}, {date: today, type: "deposit", amount: 50.00}])
    expect(account.seeStatement()).toEqual('date || credit || debit || balance\n15/06/2020 || 50.00 || || 100.00\n15/06/2020 || 50.00 || || 50.00');
  })

});
