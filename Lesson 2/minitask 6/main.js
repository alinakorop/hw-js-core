let quantity = prompt("Введите количество USD");
let currency = prompt ("Выберите, в какую валюту Вы хотите перевести сумму: EUR, UAH, GBR");
const ratioEUR = 0.89;
const ratioUAH = 27.19;
const ratioGBR = 0.80;
let conversionEUR = quantity * ratioEUR;
let conversionUAH = quantity * ratioUAH;
let conversionGBR = quantity * ratioGBR;
switch(currency) {
    case 'EUR': alert(`Сумма равна ${conversionEUR} евро`);
    break;
    case 'UAH': alert(`Сумма равна ${conversionUAH} грн`);
    break;
    case 'GBR': alert(`Сумма равна ${conversionGBR} фунтов`);
    break;
    default: alert(`Конвертор в данную валюту не представлен`); 
}