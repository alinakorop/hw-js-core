let name = prompt('Укажите объем флешки в Гб: ');
const value = 820;
name = name / 820 * 1240;
alert('На флешку поместится ' + name.toFixed(0) + ' файлов, размером 820 Мб');