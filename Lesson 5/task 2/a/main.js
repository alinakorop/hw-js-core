const ones = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
const tens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
const teens = ['десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];

function convertNumberToWord(number) {
    if (number >= 10 && number < 20) {
        return teens[number - 10];
    } else if (number > 20 && number < 100) {
        return tens[Math.floor(number / 10)] + " " + ones[number % 10];
    } else {
        return 'Некорректное значение';
    }
}

let result = convertNumberToWord(45);
alert(result);