let sum = prompt("Введите сумму покупки:");
const discount3 = 0.03;
const discount5 = 0.05;
const discount7 = 0.07;

if ( sum > 200 && sum < 300 ) {
    alert( `Сумма с учётом скидки: ${sum-(sum*discount3)}` );
} else if ( sum >= 300 && sum < 500 ) {
    alert( `Сумма с учётом скидки: ${sum-(sum*discount5)}`);
} else if ( sum >=500 ) {
    alert(` Сумма с учётом скидки: ${sum-(sum*discount7)}`);
} else {
    alert("Вы ввели некорректное значение")
}

