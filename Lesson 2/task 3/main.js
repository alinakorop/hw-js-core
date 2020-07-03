let number = +prompt("Введите одно целое число"); // 255522
let numbersArray ;
if(number >= 0 && number < 10**6) {
    let numbersArray = number.toString().split('');

    if(+numbersArray[0] + +numbersArray[1] + +numbersArray[2] == +numbersArray[3] + +numbersArray[4] + +numbersArray[5]) {
        alert("YES");
    } else {
        alert("NO");
    }
} else {
    alert("Вы ввели некорректное значение");
}
