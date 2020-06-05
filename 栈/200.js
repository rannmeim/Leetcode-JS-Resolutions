/*
给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。
*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var m = n = 0;
var grid = null;
// DFS
function getNeighbors(str) {
    let nbs = [];
    let [x,y] = str.split('-');
    x=parseInt(x);
    y=parseInt(y);
    if(x != 0) nbs.push(x-1+'-'+y)
    if(y < n-1) nbs.push(x+'-'+(y+1))
    if(x < m-1) nbs.push(x+1+'-'+y)
    if(y != 0) nbs.push(x+'-'+(y-1))
    return nbs
}
function electNode() {
//             从后向前选一个点
    for(let i = m-1; i >= 0;i--) {
        for(let j = n-1; j >= 0;j--) {
            if(!(i+'-'+j in used)) {
                let node = {key: i+'-'+j, is_island: !!parseInt(grid[i][j])};
                at_island = node.is_island;
                at_island ? island++ : water++;
                at_island ? q_i.push(node.key) : q_w.push(node.key);
                console.log('elect', node.key, 'island:',island,'water:',water )
                return node
            }
        }
    }
    return undefined
}
var numIslands = function(grid) {
    if(!grid || !grid.length) {
        return 0
    }
    function isIsland(str) {
        let [x,y] = str.split('-');
        return parseInt(grid[x][y])
    }
    
    m = grid.length;
    n = grid[0].length;
    var q_w = [];
    var q_i = []; //同队列中，不一定为同一片岛屿
    var used = {};
    var at_island = null;
    var water = 0;
    var island = 0;
    var size = m*n;
    
    if(grid[0][0] == 1) {
        island++;
        at_island = true;
        q_i.push('0-0');
    } else {
        water++;
        at_island = false;
        q_w.push('0-0'); //第一元素入队时 即计数
    }
    used['0-0']=1;
    while(q_w.length || q_i.length || Object.keys(used).length < size) { //进入循环时 cur在queue中，或者重新获取
//         入队、计数
        if(at_island && !q_i.length && q_w.length){
            at_island = false;
            water++;
//                     所有元素出缓存队列
            for(let i in q_w) {
                if(i!=0) {
                    let key = q_w[i];
                    delete used[key]
                }
            }
            q_w = [q_w.shift()]
        } else if(!at_island && !q_w.length && q_i.length) {
            at_island = true;
            island++;
//                     所有元素出缓存队列
            for(let i in q_i) {
                if(i!=0) {
                    let key = q_i[i];
                    delete used[key]
                }
            }
            q_i = [q_i.shift()]
        } else if(!q_w.length && !q_i.length) {
            let node = electNode();
            if(node == undefined) {
                break;
            }
        }
        
//         取cur
        let cur = at_island ? q_i.shift() : q_w.shift();
        used[cur] = 1;
        for(let next of getNeighbors(cur)) {
            if(!(next in used)) {
                isIsland(next) ? q_i.push(next) : q_w.push(next);
                used[next] = 1;
            }
        }   
        // if(at_island) {
            // console.log('---*-*-*---?')
            // console.log('[-] ',cur, 'island:',island,'water:',water);
            // console.log('q_i',q_i);
            // console.log('q_w',q_w);
            // console.log('used',used);
        // }
        
        
    }
    return island
};