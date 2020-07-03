let question1 = prompt("Сколько атомов в одной молекуле воды? \n Выберите номер ответа: \n 1) 3; \n 2) 2; \n 3) 4;");
let total = 0;
if(question1 == '1' || question1 == `1)`) {
    total = total + 2;
}
let question2 = prompt("Какого цвета газообразный йод? \n Выберите номер ответа: \n 1) фиолетовый; \n 2) зелёный; \n 3) жёлтый;");
if(question2 == '1'|| question2 == `1)`) {
    total = total + 2;
}
let question3 = prompt("Какой газ является самым лёгким? \n Выберите номер ответа: \n 1) гелий; \n 2) водород; \n 3) кислород")
if(question3 == '2' || question3 == `2)`) {
    total = total + 2;
}

alert(`Ваша сумма баллов: ${total}`);
