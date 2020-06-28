let amount = prompt('Введите сумму денег в кошельке');
let price = prompt('Введите цену одной шоколадки:');
let quantity = amount / price;
let rest = amount % price;
alert('На эту сумму денег Вы сможете купить ' + Math.floor(quantity) + ' шоколадок. У Вас останется ' + rest.toFixed(0) + ' денег.');