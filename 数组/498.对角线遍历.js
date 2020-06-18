/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 *
 * https://leetcode-cn.com/problems/diagonal-traverse/description/
 *
 * algorithms
 * Medium (40.93%)
 * Likes:    99
 * Dislikes: 0
 * Total Accepted:    17.9K
 * Total Submissions: 43.6K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * 
 * 输出:  [1,2,4,7,5,3,6,8,9]
 * 
 * 解释:
 * 
 * 
 * 
 * 
 * 
 * 说明:
 * 
 * 
 * 给定矩阵中的元素总数不会超过 100000 。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
    if (!matrix.length) return [];
    // 奇数项按row从小到大 偶数项从大到小排，
    let cache = new Array(matrix.length + matrix[0].length - 1).fill(null);
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[0].length; j++){
            if (cache[i+j] == null) {
                cache[i + j] = [];
            }
            (i + j) % 2 ? cache[i + j].push(matrix[i][j]) : cache[i + j].unshift(matrix[i][j]);
        }
    }
    let result = [].concat.apply([], cache);
    console.log(result);
    return result
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findDiagonalOrder;
// @after-stub-for-debug-end