const stringToConvertCase = prompt('Введите строку для трансформации');

function convertCase(convertingString) {
    let resultedString = '';

    convertingString.split('').forEach(function(convertChar, index) {
        let charCode = convertingString.charCodeAt(index);
        if (charCode >= 65 && charCode <= 90) {
            resultedString += convertingString[index].toLowerCase();
        } else if (charCode >= 97 && charCode <= 122) {
            resultedString += convertingString[index].toUpperCase();
        } else if (convertChar.match(/\d/)) {
            resultedString += '_';
        }
    });

    return resultedString;
}

const result = convertCase(stringToConvertCase);
alert(result);