var money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt(" Введите дату в формате YYYY-MM-DD ");
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();
var appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {
        p1 : "",
        p2 : "",
        p3 : "",
    },
    income : [],
    savings : true,
};
function chooseExpenses() {
    for (var i = 0; i < 2; i++) {
        var a = prompt("Введите обязательную статью расходов в этом месяце");
        var b = prompt("Во сколько обойдется?");
        if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            console.log("not done");
        }
    };
}
chooseExpenses();
var budget1day;
function detectDayBudget() {
    budget1day = Math.round(money / 30);
    alert("Ваш бюджет на 1 день составит:" + budget1day);
}
detectDayBudget();
function detectLevel() {
    if(budget1day < 100) {
        console.log("Минимальный уровень достатка");
    } else if (budget1day > 100 && budget1day < 2000) {
        console.log("Средний уровень достатка");
    } else if (budget1day > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка")
    }
}
detectLevel();
function checkSavings() {
    if (appData.savings == true) {
        var save = +prompt("Какова сумма накоплений?");
            percent = +prompt("Под какой процент?");
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();
function chooseOptExpenses() {
    
    appData.optionalExpenses.p1 = +prompt("Статья необязательных расходов?");
    appData.optionalExpenses.p2 = +prompt("Статья необязательных расходов?");
    appData.optionalExpenses.p3 = +prompt("Статья необязательных расходов?");
        }
chooseOptExpenses();