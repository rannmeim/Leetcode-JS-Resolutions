/*
给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。
*/
/**
 * 「方法一：使用自己的stack」
 * @param {character[][]} grid
 * @return {number}
 */

// let numIslands = function (grid) {
//     let _height = _width = 0;
//     let _g = [];
//     let _used = new Set();
//     let _stack = [];
//     // DFS 维护自己的stack
//     function isIsland(key) {
//         let [x, y] = key.split('-');
//         return _g[x][y] == 1
//     }
//     function getNeighbors(str) {
//         let nbs = [];
//         let [x, y] = str.split('-');
//         x = parseInt(x);
//         y = parseInt(y);
//         if (x != 0) {
//             nbs.push(x - 1 + '-' + y)
//         }
//         if (y < _width - 1) nbs.push(x + '-' + (y + 1))
//         if (x < _height - 1) nbs.push(x + 1 + '-' + y)
//         if (y != 0) nbs.push(x + '-' + (y - 1))
//         return nbs

//     }
//     function electNode() {
//         // 从后向前选一个点
//         for (let i = _height - 1; i >= 0; i--) {
//             for (let j = _width - 1; j >= 0; j--) {
//                 let key = i + '-' + j;
//                 if (isIsland(key) && !_used.has(key)) {
//                     return key
//                 }
//             }
//         }
//         return false
//     }
//     function DFS() {
//         if (!_stack.length) return;
//         let node = _stack.pop();
//         let nbs = getNeighbors(node);
//         nbs.forEach(item => {
//             if (isIsland(item) && !_used.has(item)) {
//                 _used.add(item);
//                 _stack.push(item);
//             }
//         })
//         DFS();
//     }
//     if (!grid || !grid.length) {
//         return 0
//     }
//     _g = grid;
//     let cur = null;
//     _height = grid.length;
//     _width = grid[0].length;
//     let count = 0;
//     while (cur = electNode()) {
//         _used.add(cur);
//         _stack.push(cur);
//         DFS();
//         count++;
//     }
//     return count
// };
// console.log(numIslands([["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]]))

/**
 * 「方法二：利用系统的stack」
 * @param {character[][]} grid
 * @return {number}
 */


let numIslands = function (grid) {
    let _height = _width = 0;
    let _g = [];
    let _used = new Set();
    // DFS 利用系统stack
    function isIsland(key) {
        let [x, y] = key.split('-');
        return _g[x][y] == 1
    }
    function getNeighbors(str) {
        let nbs = [];
        let [x, y] = str.split('-');
        x = parseInt(x);
        y = parseInt(y);
        if (x != 0) {
            nbs.push(x - 1 + '-' + y)
        }
        if (y < _width - 1) nbs.push(x + '-' + (y + 1))
        if (x < _height - 1) nbs.push(x + 1 + '-' + y)
        if (y != 0) nbs.push(x + '-' + (y - 1))
        return nbs

    }
    function electNode() {
        // 从后向前选一个点
        for (let i = _height - 1; i >= 0; i--) {
            for (let j = _width - 1; j >= 0; j--) {
                let key = i + '-' + j;
                if (isIsland(key) && !_used.has(key)) {
                    return key
                }
            }
        }
        return false
    }
    function DFS(node) {
        if (_used.has(node) || !isIsland(node)) return;
        _used.add(node);
        let nbs = getNeighbors(node);
        nbs.forEach(item => {
            DFS(item);
        })
    }
    if (!grid || !grid.length) {
        return 0
    }
    _g = grid;
    let cur = null;
    _height = grid.length;
    _width = grid[0].length;
    let count = 0;
    while (cur = electNode()) {
        DFS(cur);
        count++;
    }
    return count
};

console.log(numIslands([["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]]))
