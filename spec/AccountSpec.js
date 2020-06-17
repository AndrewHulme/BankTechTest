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

  it('starts off with an empty list of transactions', function(){
    expect(account.transactions).toEqual([])
  });

  describe('#deposit', function(){
    it('updates list of transactions when depositing £50 in the account', function(){
      account.deposit(50.00);
      expect(account.transactions).toEqual([{date: today, type: "deposit", amount: 50.00}])
    })

    it('updates list of transactions when depositing £100 in the account', function(){
      account.deposit(100.00);
      expect(account.transactions).toEqual([{date: today, type: "deposit", amount: 100.00}])
    })

    it('updates list of transactions when depositing £50 twice in the account', function(){
      account.deposit(50.00);
      account.deposit(100.00);
      expect(account.transactions).toEqual([{date: today, type: "deposit", amount: 50.00}, {date: today, type: "deposit", amount: 100.00}])
    })
  })

  describe('#withdraw', function(){
    beforeEach(function(){
      account.deposit(5000.00);
    });

    it('updates list of transactions when withdrawing £50 from the account', function(){
      account.withdraw(50.00);
      expect(account.transactions).toEqual([{date: today, type: "deposit", amount: 5000.00}, {date: today, type: "withdrawal", amount: 50.00}])
    })

    it('updates list of transactions when withdrawing twice from the account', function(){
      account.withdraw(100.00);
      account.withdraw(200.00);
      expect(account.transactions).toEqual([{date: today, type: "deposit", amount: 5000.00}, {date: today, type: "withdrawal", amount: 100.00}, {date: today, type: "withdrawal", amount: 200.00}])
    })
  })

  it('seeStatement function calls the createStatement method on a statement object', function(){
    account.seeStatement();
    expect(statementspy.createStatement).toHaveBeenCalled();
  })
});
