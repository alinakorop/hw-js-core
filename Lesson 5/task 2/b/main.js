const stringForStatistics = prompt('Введите строку для проверки статистики');

function wordStaticticsChecker(stringToCheck) {
    const specialCharsDictionary = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/gi;
    let specialCharsCount = (stringToCheck.match(specialCharsDictionary) || []).length;
    const numberDictionary = /\d/gi;
    let numbersCount = (stringToCheck.match(numberDictionary) || []).length;
    const wordCharsDictionary =  /[a-z]/gi;
    let wordCharsCount = (stringToCheck.match(wordCharsDictionary) || []).length;

    return `Строка состоит из: \n спецсимволов ${specialCharsCount}, \n цифр ${numbersCount}, \n букв ${wordCharsCount}`;
}

const result = wordStaticticsChecker(stringForStatistics);
alert(result);