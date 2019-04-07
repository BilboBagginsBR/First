" use strict";

let money = +prompt("Your selary a month: ", ""),
    time = prompt("Date YYYY-MM-DD: ", "");

let appData = {
    budget: money,
    expenses: {},
    optinalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

let i = 0;
while (i < 2) {
    let a = prompt("Urgent expense: ", ""),
        b = prompt("Price of expense: ", "");

    if ((typeof (a) === 'string') && (a != null) && (b != null) &&
        (a != '') && (b != '') && (a.length < 50)) {
        console.log("Done");
        appData.expenses[a] = b;

    }
    i++;

}

// for (let i = 0; i < 2; i++) {
//     let a = prompt("Urgent expense: ", ""),
//         b = prompt("Price of expense: ", "");

//     if ((typeof (a) === 'string') && (a != null) && (b != null) &&
//         (a != '') && (b != '') && (a.length < 50)) {
//         console.log("Done");
//         appData.expenses[a] = b;

//     }
// }

appData.moneyPerDay = appData.budget / 30;

alert("Every day budget: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Min level of life");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Mid level of life");
} else if (appData.moneyPerDay > 2000) {
    console.log("High level of life")
} else {
    console.log("Error")
}