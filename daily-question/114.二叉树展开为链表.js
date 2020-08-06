/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
 *
 * https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/description/
 *
 * algorithms
 * Medium (69.10%)
 * Likes:    494
 * Dislikes: 0
 * Total Accepted:    71.6K
 * Total Submissions: 101K
 * Testcase Example:  '[1,2,5,3,4,null,6]'
 *
 * 给定一个二叉树，原地将它展开为一个单链表。
 * 
 * 
 * 
 * 例如，给定二叉树
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   5
 * ⁠/ \   \
 * 3   4   6
 * 
 * 将其展开为：
 * 
 * 1
 * ⁠\
 * ⁠ 2
 * ⁠  \
 * ⁠   3
 * ⁠    \
 * ⁠     4
 * ⁠      \
 * ⁠       5
 * ⁠        \
 * ⁠         6
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    // // 超时的笨方法
    // /**
    //  *@param {TreeNode} cur 当前结点
    //  *@param {TreeNode} pre 先序遍历的前一个结点
    //  *@return {TreeNode} 当前子树先序遍历的最后一个结点
    //  */
    // function connectToPre(cur, pre) {
    //     let leftLastNode = null;
    //     let rightLastNode = null;
    //     let left = cur.left; // 先存储cur.left、right的复制  因为后代会在当前使用cur.left之前更改cur.left
    //     let right = cur.right;

    //     if (left) {
    //         leftLastNode = connectToPre(left, cur)
    //     }
    //     if (right) {
    //         rightLastNode = connectToPre(right, leftLastNode || cur)
    //     }
    //     if (pre) {
    //         pre.right = cur;
    //         pre.left = null;
    //         delete pre.next
    //     }
    //     return rightLastNode || leftLastNode || cur
    // }
    // root && connectToPre(root)

    // 递归+先序遍历  右->左->根
    let stack = [];
    let pre = null;
    root && stack.push(root);
    while (stack.length) {
        let cur = stack.pop();
        if (pre) {
            pre.right = cur;
            pre.left = null;
        }
        if (cur.right) stack.push(cur.right);
        if (cur.left) stack.push(cur.left);
        pre = cur;
    }
    // 可也后序遍历  右->左->根（略）
    
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = flatten;
// @after-stub-for-debug-end