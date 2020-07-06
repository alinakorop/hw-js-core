function shortestWord(str) {
    let strArray = str.split(' ');

    let shortestWordLength = strArray[0].length;

    for(let i = 0; i<strArray.length; i++) {
        if (strArray[i].length < shortestWordLength) {
            shortestWordLength = strArray[i].length;
        }
    }
    return shortestWordLength;
}

alert(shortestWord('my test string for short word'));