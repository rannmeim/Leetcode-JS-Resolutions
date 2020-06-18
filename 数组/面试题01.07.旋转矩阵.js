/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < i; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    for (let i = 0; i < matrix.length; i++){
        matrix[i].reverse();
    }
    console.log(matrix)
    return matrix
};
rotate([]);