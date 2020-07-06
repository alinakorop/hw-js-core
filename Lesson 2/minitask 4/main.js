let year = prompt('Введите год');
let isLeapYear = (!(year % 400) || !(year % 4)) && (year % 100) ? true : false;

alert(isLeapYear);

