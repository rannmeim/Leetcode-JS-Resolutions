/*
 * @lc app=leetcode.cn id=542 lang=javascript
 *
 * [542] 01 矩阵
 *
 * https://leetcode-cn.com/problems/01-matrix/description/
 *
 * algorithms
 * Medium (44.68%)
 * Likes:    272
 * Dislikes: 0
 * Total Accepted:    33.4K
 * Total Submissions: 74.7K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * 给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。
 * 
 * 两个相邻元素间的距离为 1 。
 * 
 * 示例 1: 
 * 输入:
 * 
 * 
 * 0 0 0
 * 0 1 0
 * 0 0 0
 * 
 * 
 * 输出:
 * 
 * 
 * 0 0 0
 * 0 1 0
 * 0 0 0
 * 
 * 
 * 示例 2: 
 * 输入:
 * 
 * 
 * 0 0 0
 * 0 1 0
 * 1 1 1
 * 
 * 
 * 输出:
 * 
 * 
 * 0 0 0
 * 0 1 0
 * 1 2 1
 * 
 * 
 * 注意:
 * 
 * 
 * 给定矩阵的元素个数不超过 10000。
 * 给定矩阵中至少有一个元素是 0。
 * 矩阵中的元素只在四个方向上相邻: 上、下、左、右。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
    function getNeighbors(node) {
        let result = [];
        let [r, c] = node;
        if (r > 0) result.push([r - 1, c]);
        if (c > 0) result.push([r, c - 1]);
        if (r < matrix.length - 1) result.push([r + 1, c]);
        if (c < matrix[0].length - 1) result.push([r, c + 1]);
        result = result.filter(item => !visited.has(item[0] + '-' + item[1]));
        return result;
    }

    let focusOn = 0;
    let visited = new Set();
    let size = matrix.length * matrix[0].length;
    let queue = [];

    // let renderedMatrix = new Array(matrix.length).fill([]); // 【ERROR】: because renderedMatrix[0] == renderMatrix[1]
    let renderedMatrix = new Array(matrix.length).fill(0);
    renderedMatrix = renderedMatrix.map(() => new Array(matrix[0].length).fill(-1));

    //init 
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[0].length; c++) {
            if (matrix[r][c] == 0) {
                queue.push([r, c]);
                visited.add(r + '-' + c);
            }
        }
    }

    while (visited.size < size || queue.length) {
        let layerSize = queue.length; // count item which == focusOn
        for (let i = 0; i < layerSize; i++) {
            let cur = queue.shift();
            getNeighbors(cur).forEach(item => {
                visited.add(item[0] + '-' + item[1]);
                queue.push(item);
            })
            renderedMatrix[cur[0]][cur[1]] = focusOn;
        }
        focusOn++;
    }
    return renderedMatrix;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = updateMatrix;
// @after-stub-for-debug-end