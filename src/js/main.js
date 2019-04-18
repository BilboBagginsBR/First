' use strict';

let startt = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value'),
    daybudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthsavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearsavingsValue = document.getElementsByClassName('yearsavings-value');
let inputExpenses = document.getElementsByClassName('expenses-item'),
    buttonMass = document.getElementsByTagName('button'),
    expensesItemBtn = buttonMass[0],
    optionalexpensesBtn = buttonMass[1],
    countBudgetBtn = buttonMass[2];
let optionalexpensesItems = document.querySelectorAll('.optionalexpenses-item');
let income = document.querySelector('#income'),
    savings = document.querySelector('#savings'), 
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'), 
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');



console.log(inputExpenses);
console.log(expensesItemBtn);
console.log(optionalexpensesBtn);
console.log(countBudgetBtn);
console.log(optionalexpensesItems);
console.log('************************');
console.log(income);
console.log(savings);
console.log(sum);
console.log(percent);
console.log(yearValue);
console.log(monthValue);
console.log(dayValue);


