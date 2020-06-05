/*
给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。
*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var height = width = 0;
var g = [];
used = new Set();
// DFS
function getNeighbors(str) {
    let nbs = [];
    let [x, y] = str.split('-');
    x = parseInt(x);
    y = parseInt(y);
    if (x != 0) nbs.push(x - 1 + '-' + y)
    if (y < width - 1) nbs.push(x + '-' + (y + 1))
    if (x < height - 1) nbs.push(x + 1 + '-' + y)
    if (y != 0) nbs.push(x + '-' + (y - 1))
    nbs.filter(item => {
        if (!used.has(item)) used.add(item);
        return !used.has(item)
    })
    return nbs


    // console.log(height)
    // console.log(width)
    // let nbs = [];
    // let [x, y] = str.split('-');
    // x = parseInt(x);
    // y = parseInt(y);
    // x != 0 && !used.has(x - 1 + '-' + y) ? 0 : nbs.push(x - 1 + '-' + y);
    // y < width - 1 && used.has(x + '-' + (y + 1)) ? 0 : nbs.push(x + '-' + (y + 1))
    // x < height - 1 && used.has(x + 1 + '-' + y) ? 0 : nbs.push(x + 1 + '-' + y)
    // y != 0 && used.has(x + '-' + (y - 1)) ? 0 : nbs.push(x + '-' + (y - 1))
    // return nbs
}
function electNode() {
    // 从后向前选一个点
    for (let i = height - 1; i >= 0; i--) {
        for (let j = width - 1; j >= 0; j--) {
            if (!(i + '-' + j in used)) {
                used.add(i + '-' + j)
                return i + '-' + j
            }
        }
    }
    return false
}
function DFS(node) {
    if (!used.has(node)) {
        used.add(node);
    }
    console.log('used', used)
    let nbs = getNeighbors(node);
    console.log('used', used)
    console.log('nbs', nbs)

    if (!nbs.length) {
        return
    }

    nbs.forEach(item => {
        DFS(item);
    })
}

var numIslands = function (grid) {
    if (!grid || !grid.length) {
        return 0
    }
    g = grid;
    var cur = null;
    height = grid.length;
    width = grid[0].length;
    var count = 0;
    while (cur = electNode()) {
        console.log('cur', cur)

        DFS(cur);
        count++;
    }
    console.log('??')
    return count
};
console.log(numIslands([["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]]))
