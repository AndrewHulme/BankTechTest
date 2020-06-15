'use strict';

describe('Account', function(){
  var account;

  beforeEach(function(){
    account = new Account();
  });

  it('starts off with an empty statement', function(){
    expect(account.seeStatement()).toEqual('date || credit || debit || balance');
  });

});
