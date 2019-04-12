" use strict";

let money, time;

// function start() {
    
//     time = prompt("Date YYYY-MM-DD: ", "");

//     while(isNaN(money) || money == '' || money == null) {
//         money = +prompt("Your selary a month: ", "");
//     }
// }

// start();


let appData = {
    budget: money,
    expenses: {},
    optinalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        appData.optinalExpenses[i] = prompt("Optional expenses: ", "") ;
    }
    console.log(appData.optinalExpenses);
}


chooseOptExpenses();



// let i = 0;
// while (i < 2) {
//     let a = prompt("Urgent expense: ", ""),
//         b = prompt("Price of expense: ", "");

//     if ((typeof (a) === 'string') && (a != null) && (b != null) &&
//         (a != '') && (b != '') && (a.length < 50)) {
//         console.log("Done");
//         appData.expenses[a] = b;

//     }
//     i++;

// }

// function chooseExpenses() {
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
// }
// chooseExpenses();

// function detectDayBudget() {
//     appData.moneyPerDay = (appData.budget / 30).toFixed();
//     alert("Everyday budget: " + appData.moneyPerDay);
// }

// detectDayBudget();



// function detectLevel() {
//     if (appData.moneyPerDay < 100) {
//         console.log("Min level of life");
//     } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//         console.log("Mid level of life");
//     } else if (appData.moneyPerDay > 2000) {
//         console.log("High level of life")
//     } else {
//         console.log("Error")
//     }
// }



// function checkSavings() {
//     if (appData.savings == true) {
//         let save = +prompt("Which sum of accumulation"),
//             procent = +prompt("Which procent");

//         appData.monthIncome = (save/100/12*procent).toFixed();
//         alert("Income of your deposite " + appData.monthIncome);
//     }
// }

// checkSavings();