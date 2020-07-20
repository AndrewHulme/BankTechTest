"use strict";

describe("Statement", function () {
  var statement;
  var today;
  var dd;
  var mm;
  var yyyy;

  beforeEach(function () {
    today = new Date();
    dd = String(today.getDate()).padStart(2, "0");
    mm = String(today.getMonth() + 1).padStart(2, "0");
    yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;
  });

  describe("#createStatement", function () {
    it("starts off with an empty statement", function () {
      statement = new Statement();
      expect(statement.createStatement([])).toEqual(
        `date || credit || debit || balance`
      );
    });

    it("updates statement when depositing £50 in the account", function () {
      statement = new Statement();
      expect(
        statement.createStatement([
          { date: today, type: "deposit", amount: 50.0 },
        ])
      ).toEqual(
        `date || credit || debit || balance\n${today} || 50.00 || || 50.00`
      );
    });

    it("updates statement when depositing £50 twice in the account", function () {
      statement = new Statement();
      expect(
        statement.createStatement([
          { date: today, type: "deposit", amount: 50.0 },
          { date: today, type: "deposit", amount: 100.0 },
        ])
      ).toEqual(
        `date || credit || debit || balance\n${today} || 100.00 || || 150.00\n${today} || 50.00 || || 50.00`
      );
    });

    it("updates statement when depositing £100 then withdrawing £50 from the account", function () {
      statement = new Statement();
      expect(
        statement.createStatement([
          { date: today, type: "deposit", amount: 100.0 },
          { date: today, type: "withdrawal", amount: 50.0 },
        ])
      ).toEqual(
        `date || credit || debit || balance\n${today} || || 50.00 || 50.00\n${today} || 100.00 || || 100.00`
      );
    });

    it("updates statement when depositing £5000 then withdrawing £100 and £200 from the account", function () {
      statement = new Statement();
      expect(
        statement.createStatement([
          { date: today, type: "deposit", amount: 5000.0 },
          { date: today, type: "withdrawal", amount: 100.0 },
          { date: today, type: "withdrawal", amount: 200.0 },
        ])
      ).toEqual(
        `date || credit || debit || balance\n${today} || || 200.00 || 4700.00\n${today} || || 100.00 || 4900.00\n${today} || 5000.00 || || 5000.00`
      );
    });
  });
});
