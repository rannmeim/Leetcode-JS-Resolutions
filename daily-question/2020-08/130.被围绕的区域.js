/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 *
 * https://leetcode-cn.com/problems/surrounded-regions/description/
 *
 * algorithms
 * Medium (40.12%)
 * Likes:    323
 * Dislikes: 0
 * Total Accepted:    59.5K
 * Total Submissions: 142.9K
 * Testcase Example:  '[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]'
 *
 * 给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。
 * 
 * 找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。
 * 
 * 示例:
 * 
 * X X X X
 * X O O X
 * X X O X
 * X O X X
 * 
 * 
 * 运行你的函数后，矩阵变为：
 * 
 * X X X X
 * X X X X
 * X X X X
 * X O X X
 * 
 * 
 * 解释:
 * 
 * 被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O'
 * 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    /* 
    1. 遍历四条边的O点，每个点BFS，遍历到的O点改为A
    2. 遍历整个二维矩阵，A改为O，O改为X
    */

    function getNeighborPos(x, y) {
        console.log('center:', x, y)
        let neighbors = [];
        if (x > 0) neighbors.push([x - 1, y]);
        if (x < width - 1) neighbors.push([x + 1, y]);
        if (y > 0) neighbors.push([x, y - 1]);
        if (y < height - 1) neighbors.push([x, y + 1]);
        console.log('neighbors:', JSON.stringify(neighbors))
        return neighbors;
    }
    const height = board.length;
    const width = height ? board[0].length : 0;
    console.log('size:', width, height)
    let queue = [];
    for (let i = 0; i < width; i++) {
        if (board[0][i] === 'O') {
            board[0][i] = 'A';
            queue.push([i, 0]);
        }
        if (board[height - 1][i] === 'O') {
            board[height - 1][i] = 'A';
            queue.push([i, height - 1]);
        }
    }
    for (let i = 1; i < height - 1; i++) {
        if (board[i][0] === 'O') {
            board[i][0] = 'A';
            queue.push([0, i]);
        }
        if (board[i][width - 1] === 'O') {
            board[i][width - 1] = 'A';
            queue.push([width - 1, i]);
        }
    }
    console.log('queue:', JSON.stringify(queue))

    while (queue.length) {
        let [x, y] = queue.shift();
        getNeighborPos(x, y).forEach(([x1, y1]) => {
            console.log(x1, y1);

            if (board[y1][x1] === 'O') {
                board[y1][x1] = 'A';
                queue.push([x1, y1]);
            }
        })
    }
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            if (board[j][i] === 'A') board[j][i] = 'O';
            else if (board[j][i] === 'O') board[j][i] = 'X';
        }
    }
    console.log(JSON.stringify(board))
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = solve;
// @after-stub-for-debug-end