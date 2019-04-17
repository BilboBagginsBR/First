" use strict";

let money, time;

function start() {
    
    time = prompt("Date YYYY-MM-DD: ", "");

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Your selary a month: ", "");
    }
}

start();


let appData = {
    budget: money,
    expenses: {},
    optinalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    // chooseExpenses: function() {
    //     for (let i = 0; i < 2; i++) {
    //         let a = prompt("Urgent expense: ", ""),
    //             b = prompt("Price of expense: ", "");
        
    //         if ((typeof (a) === 'string') && (a != null) && (b != null) &&
    //             (a != '') && (b != '') && (a.length < 50)) {
                
    //             appData.expenses[a] = b;
    //             } else {
    //                 i = i - 1;
    //             }
        
    //     }
    // },
    // detectDayBudget: function() {
    //     appData.moneyPerDay = (appData.budget / 30).toFixed();
    //     alert("Everyday budget: " + appData.moneyPerDay);        
    // },
    // detectLevel: function() {
    //     if (appData.moneyPerDay < 100) {
    //         console.log("Min level of life");
    //     } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    //         console.log("Mid level of life");
    //     } else if (appData.moneyPerDay > 2000) {
    //         console.log("High level of life")
    //     } else {
    //         console.log("Error")
    //     }        
    // },
    // checkSavings: function() {
    //     if (appData.savings == true) {
    //         let save = +prompt("Which sum of accumulation"),
    //             procent = +prompt("Which procent");
    
    //         appData.monthIncome = (save/100/12*procent).toFixed();
    //         alert("Income of your deposite " + appData.monthIncome);
    //     }      
    // },
    // chooseOptExpenses: function() {
    //     for (let i = 1; i < 4; i++) {
    //         appData.optinalExpenses[i] = prompt("Optional expenses: ", "") ;
    //     } 
    // },
    chooseIncome: function() {
         let items = prompt('What brings extra income (comma separated) ', "");

        while(items == '' || items == null || Number.isNaN(Number(items)) == false){
         items = prompt('What brings extra income (comma separated) ', "");
        }
        appData.income = items.split(', ');
        appData.income.push(prompt('Something more ? ', ""));
        appData.income.sort();
        appData.income.forEach(function(items, index, array) {
            console.log("Ways of additional income: " + (index+1) + " : " + appData.income[index]);
        });
    }
};


//appData.chooseIncome();
console.log("Our program includes data: " );
for (let index in appData) {
    console.log(index + ": " + appData[index]);
}

