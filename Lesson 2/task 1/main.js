const can1 = 16;
let LWH = prompt("Введите длину, ширину и высоту офиса в метрах соответственно через запятую");
let LWHArray = LWH.split(',');
if(LWHArray[0]<=1000 && LWHArray[1]<=1000 && LWHArray[2]<=1000){
    let area = (2*LWHArray[0] + 2*LWHArray[1])*LWHArray[2];
    const can1 = 16;
    let quantity = area / can1
        alert(`Площадь стен офиса составляет ${area} кв.м, понадобится минимум ${Math.round(quantity)} банок краски`)

} else {
    alert("Вы ввели некорректное значение")
}