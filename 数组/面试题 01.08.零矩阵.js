/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let row = new Set();
    let col = new Set();
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[0].length; j++){
            if (matrix[i][j] == 0) {
                console.log(i,j)
                row.add(i);
                col.add(j);
            }
        }
    }
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[0].length; j++){
            if (row.has(i) || col.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
    console.log(matrix)
    return matrix
};
setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]);