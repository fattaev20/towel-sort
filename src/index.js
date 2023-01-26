// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    let matLen = matrix.length;
    let i = 0;
    console.log(matLen);
    while (i < matLen) {
        matrix[i].sort((a, b) => a - b);
        i += 2;
    }

    i = 1;

    while (i < matLen) {
        matrix[i].sort((a, b) => a - b).reverse();
        i += 2;
    }

    for (let i = 0; i < matLen; i++) {
        if (matrix[i].length == 0) {
            matrix.splice(i, 1);
        }
    }

    let resArr = [];
    for (let element of matrix) {
        resArr = resArr.concat(element);
    }


    console.log(resArr);
    return resArr;
}