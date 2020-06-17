# Bank tech test

## Description
A bank tech test which allows users to interact with their account through depositing money, withdrawing money and printing their bank statement.

## Approach
I have split the code into two classes: Account and Statement. The Account class is responsible for handling deposits, withdrawals and holding the transactions, whereas the Statement class is responsible for generating the statement.

## Technology used
- Language: JavaScript
- Testing Framework: Jasmine

## How to run the project:
Clone this repository from Github then open in your browser. Below is an example of how to run the code:

`$ var account = new Account()`
`$ account.deposit(100)`
`$ account.withdraw(50)`
`$ account.seeStatement()`

An example of code running can be seen below:

![REPLUsage](images/BankTestUsage.png)



## How to run tests:
Clone this repository from Github then open SpecRunner.html in your browser.

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).


## User stories

```
As a client,
So I can add money to my account,
I can make deposits into my account.
```

```
As a client,
So I can take money out of my account,
I can make withdrawals from my account.
```

```
As a client,
So I can analyse my account,
I can see an account statement which prints the date, amount and current balance of my transactions.
```

## Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```


## Models

| class | methods | variables |
| --- | --- | --- |
| Account | .deposit(amount) | this.transactions = [{date: date, type: type, amount: amount}] |
| | .withdraw(amount) | |
| | .seeStatement() | |

| class | methods | variables |
| --- | --- | --- |
| Statement | .createStatement() |  |




## Input/Output Table

Before: `account = new Account`

| Input | Function | Output |
| --- | --- | --- |
| | account.seeStatement()| date \|\| credit \|\| debit \|\| balance |
| account.deposit(50) | account.seeStatement()| date \|\| credit \|\| debit \|\| balance <br/> 15/06/2020 \|\| 50.00 \|\| \|\| 50.00|
| account.deposit(50) <br/> account.deposit(50) | account.seeStatement()| date \|\| credit \|\| debit \|\| balance <br/> 15/06/2020 \|\| 50.00 \|\| \|\| 100.00 <br/> 15/06/2020 \|\| 50.00 \|\| \|\| 50.00|
| account.deposit(50) <br/> account.deposit(100) | account.seeStatement()| date \|\| credit \|\| debit \|\| balance <br/> 15/06/2020 \|\| 100.00 \|\| \|\| 150.00 <br/> 15/06/2020 \|\| 50.00 \|\| \|\| 50.00|
| account.deposit(100) <br/> account.withdraw(50) | account.seeStatement()| date \|\| credit \|\| debit \|\| balance <br/> 15/06/2020 \|\|  \|\| 50.00 \|\| 50.00 <br/> 15/06/2020 \|\| 100.00 \|\| \|\| 100.00|


## Self-assessment

Once you have completed the challenge and feel happy with your solution, here's a form to help you reflect on the quality of your code: https://docs.google.com/forms/d/1Q-NnqVObbGLDHxlvbUfeAC7yBCf3eCjTmz6GOqC9Aeo/edit

![Tracking pixel](https://githubanalytics.herokuapp.com/course/individual_challenges/bank_tech_test.md)
