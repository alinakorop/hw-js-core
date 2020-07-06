function twoOldestAges(arr) {
    let oldest;
    let preoldest;

    oldest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > oldest) {
            preoldest = oldest;
            oldest = arr[i];
        }
    }

    return [preoldest, oldest];
}

alert(twoOldestAges([12, 34, 50, 67, 90, 2]));