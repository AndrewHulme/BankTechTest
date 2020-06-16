'use strict';

describe('Account', function(){
  var statementspy;
  var account;
  var today;
  var dd;
  var mm;
  var yyyy;

  beforeEach(function(){
    statementspy = jasmine.createSpyObj('statement',['createStatement']);
    account = new Account(statementspy);

    today = new Date();
    dd = String(today.getDate()).padStart(2, '0');
    mm = String(today.getMonth() + 1).padStart(2, '0');
    yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
  });

  it('starts off with an empty statement', function(){
    expect(account.transactions).toEqual([])
    // expect(account.seeStatement()).toEqual(`date || credit || debit || balance`);
  });

  describe('#deposit', function(){
    it('updates statement when depositing £50 in the account', function(){
      account.deposit(50.00);
      expect(account.transactions).toEqual([{date: today, type: "deposit", amount: 50.00}])
      // expect(account.seeStatement()).toEqual(`date || credit || debit || balance\n${today} || 50.00 || || 50.00`);
    })

    it('updates statement when depositing £100 in the account', function(){
      account.deposit(100.00);
      expect(account.transactions).toEqual([{date: today, type: "deposit", amount: 100.00}])
      // expect(account.seeStatement()).toEqual(`date || credit || debit || balance\n${today} || 100.00 || || 100.00`);
    })

    it('updates statement when depositing £50 twice in the account', function(){
      account.deposit(50.00);
      account.deposit(100.00);
      expect(account.transactions).toEqual([{date: today, type: "deposit", amount: 50.00}, {date: today, type: "deposit", amount: 100.00}])
      // expect(account.seeStatement()).toEqual(`date || credit || debit || balance\n${today} || 100.00 || || 150.00\n${today} || 50.00 || || 50.00`);
    })
  })

  describe('#withdraw', function(){
    it('updates statement when depositing £100 then withdrawing £50 from the account', function(){
      account.deposit(100.00);
      account.withdraw(50.00);
      expect(account.transactions).toEqual([{date: today, type: "deposit", amount: 100.00}, {date: today, type: "withdrawal", amount: 50.00}])
      // expect(account.seeStatement()).toEqual(`date || credit || debit || balance\n${today} || || 50.00 || 50.00\n${today} || 100.00 || || 100.00`);
    })

    it('updates statement when depositing £5000 then withdrawing £100 from the account', function(){
      account.deposit(5000.00);
      account.withdraw(100.00);
      account.withdraw(200.00);
      expect(account.transactions).toEqual([{date: today, type: "deposit", amount: 5000.00}, {date: today, type: "withdrawal", amount: 100.00}, {date: today, type: "withdrawal", amount: 200.00}])
      // expect(account.seeStatement()).toEqual(`date || credit || debit || balance\n${today} || || 200.00 || 4700.00\n${today} || || 100.00 || 4900.00\n${today} || 5000.00 || || 5000.00`);
    })
  })

  // it('seeStatement function calls the createStatement method on a statement object', function(){
  //
  // })
});
