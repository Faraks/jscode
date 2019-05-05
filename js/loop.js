var money = +prompt("Ваш бюджет на месяц?");
var time = prompt(" Введите дату в формате YYYY-MM-DD ");
var appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false,
};
var a = prompt("Введите обязательную статью расходов в этом месяце");
var b = prompt("Во сколько обойдется?");
var i = 0;
while (i < 2) {
    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log("not done");
    }
    i++;
};
var a = prompt("Введите обязательную статью расходов в этом месяце");
var b = prompt("Во сколько обойдется?");
var i = 0;
do{
    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log("not done");
    }
    i++;
}while (i < 2);
var budget1day = Math.round(money / 30);
alert("Ваш бюджет на 1 день составит:" + budget1day);
if(budget1day < 100) {
    console.log("Минимальный уровень достатка");
} else if (budget1day > 100 && budget1day < 2000) {
    console.log("Средний уровень достатка");
} else if (budget1day > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка")
}