# Bank tech test

Today, you'll practice doing a tech test.

For most tech tests, you'll essentially have unlimited time.  This practice session is about producing the best code you can when there is a minimal time pressure.

You'll get to practice your OO design and TDD skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).


### User stories

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

### Acceptance criteria

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
| Account | .deposit(amount) | this.transactions = [[date, type, amount]] |
| | .withdraw(amount) | |
| | .seeStatement() | |

Example of how this would work:

#### In REPL:
andrew = new Account()\
andrew.deposit(1000)\
andrew.deposit(2000)\
andrew.withdraw(500)\
andrew.seeStatement()

#### Instance variable:
this.transactions = [[10/01/2012, credit, 1000], [13/01/2012, credit, 2000], [14/01/2012, debit, 500]]


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
