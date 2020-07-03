let number = prompt("Введите пятизначное число"); // 25552
let numbersArray = number.split('');

if (numbersArray[0] === numbersArray[4] && numbersArray[1] === numbersArray[3]) {
    alert('Число является палиндромом');
} else {
    alert('Число не является палиндромом');
}