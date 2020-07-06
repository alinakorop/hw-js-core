function sortString(str) {
    let strArray = str.split(' ');
    let arrToString = [];
    
    for (let i = 0; i < strArray.length; i++) {
        for (let j = 0; j < strArray[i].length; j++) {
            if (strArray[i][j] == '1' || strArray[i][j] == '2' || strArray[i][j] == '3' || strArray[i][j] == '4' || strArray[i][j] == '5' || strArray[i][j] == '6' || strArray[i][j] == '7' || strArray[i][j] == '8' || strArray[i][j] == '9') {
                let indexNum = +strArray[i][j];
                arrToString[indexNum] = strArray[i];
            }
        }
    }
    return arrToString.join(' ');
}

alert(sortString('is2 Thi1s T4est 3a'));