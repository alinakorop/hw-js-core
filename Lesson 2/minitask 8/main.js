let perimeter = prompt('Введите периметр квадрата, см : ');
let circumference = prompt('Введите длину окружности, см : ');
const pi = 3.14;
const length = perimeter / 4;
let radius = circumference / (2*pi);
if ((radius * 2) <= length){
    alert("Данная окружность помещается в указанный квадрат");
} else {
    alert("Данная окружность не помещается в указанный квадрат");
}
