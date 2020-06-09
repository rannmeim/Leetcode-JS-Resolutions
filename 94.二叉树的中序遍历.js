/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/*
递归解决方案的优点是它更容易实现。 
但是，存在一个很大的缺点：如果递归的深度太高，你将遭受堆栈溢出。 
在这种情况下，您可能会希望使用 BFS，或使用显式栈实现 DFS。
我们使用 while 循环和栈来模拟递归期间的系统调用栈，即使用迭代的方法

迭代vs递归：
相对来说，能用迭代不用递归（因为递归不断调用函数，浪费空间，容易造成堆栈溢出）
*/
var inorderTraversal = function (root) {

    let stack = [];
    let visited = new Set();
    let result = [];
    if (root) {
        stack.push(root);
        visited.add(root);
    }

    while (stack.length) {
        console.log('stack', stack.length)

        let cur = stack.pop();
        console.log('cur', cur.val)
        visited.add(cur);
        //出口
        if (!cur.left || visited.has(cur.left)) {
            // visited.add(cur);
            result.push(cur.val)
            // continue;
        }
        if (cur.right && !visited.has(cur.right)) {
            visited.add(cur.right);
            stack.push(cur.right)
        }
        stack.push(cur)
        if (cur.left && !visited.has(cur.left)) {
            // visited.add(cur.left);
            stack.push(cur.left)
        }
    }
    console.log('result', result)
    return result
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = inorderTraversal;
// @after-stub-for-debug-end