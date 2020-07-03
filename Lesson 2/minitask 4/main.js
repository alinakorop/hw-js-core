let year = prompt('Введите год');
let isHighYear = (!(year % 400) || !(year % 4)) && (year % 100) ? true : false;

alert(isHighYear);

