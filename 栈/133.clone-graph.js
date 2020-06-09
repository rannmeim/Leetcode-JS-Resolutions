/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 * eg.
 * {
  val: 1,
  neighbors: [ { val: 2, neighbors: [Array] }, { val: 4, neighbors: [Array] } ]
}
 */
/*
示例：
输入：adjList = [[2],[1]]
输出：[[2],[1]]

【注意：输入 != cloneGraph函数的输入   输出 != 函数的输出】
*/
/**
 * @param {Node} node
 * @return {Node}
 */
// DFS
var cloneGraph = function (node) {
    function geneNode(node, existNodes) {
        if (!node) return null;
        let existNode = existNodes.find(item => item.val == node.val);
        if (existNode) return existNode
        if (existNodes.includes(node.val)) return;
        let newNode = {};
        newNode.val = node.val;
        newNode.neighbors = [];
        node.neighbors.forEach(element => {
            existNodes.push(newNode);
            newNode.neighbors.push(geneNode(element, existNodes));
        });
        return newNode;
    }
    return geneNode(node, []);

};
// @lc code=end

