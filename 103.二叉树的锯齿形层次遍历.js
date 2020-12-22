/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (54.49%)
 * Likes:    346
 * Dislikes: 0
 * Total Accepted:    100.2K
 * Total Submissions: 176.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 * 
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回锯齿形层序遍历如下：
 * 
 * 
 * [
 * ⁠ [3],
 * ⁠ [20,9],
 * ⁠ [15,7]
 * ]
 * 
 * 
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    /* 
    思路：
    使用两个栈，一个左栈出栈后，子元素先左后右入 进入右栈   右栈出栈后，子元素先右后左，压入左栈
     */
    let leftStack = []
    let rightStack = []
    let toRight = true
    let result = []
    if(root) leftStack.push(root)
    while (leftStack.length || rightStack.length) {
        let layer = []
        let stack = toRight ? leftStack : rightStack
        let otherStack = toRight ? rightStack : leftStack
        while (stack.length) {
            let node = stack.pop()
            layer.push(node.val)
            if (toRight) {
                
            }
            toRight ? otherStack.push(item.left, item.right)
        }
    }

};
// @lc code=end

