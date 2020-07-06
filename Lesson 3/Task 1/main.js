function sumMin(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] < min) {
                min = arr[i][j];
            }
        }
        total +=min;
    }

    return total;
}

alert(sumMin([[1,2,3],[33,22,55],[16,42,345,79,1]]));