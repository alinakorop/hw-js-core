const number = prompt('Введите трёхзначное число: '); //346

let restFirstDidgit = number % 100; // 46

let c = restFirstDidgit % 10  // 6;
let b = (restFirstDidgit - c) / 10 // 4;
let a = (number - restFirstDidgit) / 100  // 3;

alert('' + c + b + a);

// alert(number.split('').reverse().join(''));