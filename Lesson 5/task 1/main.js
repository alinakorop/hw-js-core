let DNA = prompt('Введите строку ДНК');

function DNA_strand(DNAString) {
    let modifiedDNAArray = [];
    DNAString.split('').forEach(function (DNAChar, index){ // anonymous function () => {} === function() {}
        switch(DNAChar) {
            case 'A': modifiedDNAArray[index] = 'T';
            break;
            case 'T': modifiedDNAArray[index] = 'A';
            break;
            case 'C': modifiedDNAArray[index] = 'G';
            break;
            case 'G': modifiedDNAArray[index] = 'C';
            break;
            default: modifiedDNAArray = 'Ошибка в ДНК'.split('');
        }
    });

    return modifiedDNAArray.join('');
}

let result = DNA_strand(DNA);
alert(result);