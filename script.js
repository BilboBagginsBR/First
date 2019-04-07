" use strict";

var money = +prompt("Your selary a month: ", ""),
	time = prompt("Date YYYY-MM-DD: ", ""),
	stateOfExpense = prompt("Urgent expense: ", ""),
	priceOfExpense = +prompt("Price of expense: ", "");
var appData = {
	Budget: money,
	Time: time,
	Expenses: {
		stateOfExpense: priceOfExpense
	},
	optinalExpenses: {},
	income: {},
	savings: false
};

alert(money/30);