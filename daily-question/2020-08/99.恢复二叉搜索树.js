/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
 *
 * https://leetcode-cn.com/problems/recover-binary-search-tree/description/
 *
 * algorithms
 * Hard (57.18%)
 * Likes:    309
 * Dislikes: 0
 * Total Accepted:    33.7K
 * Total Submissions: 54.9K
 * Testcase Example:  '[1,3,null,null,2]'
 *
 * 二叉搜索树中的两个节点被错误地交换。
 * 
 * 请在不改变其结构的情况下，恢复这棵树。
 * 
 * 示例 1:
 * 
 * 输入: [1,3,null,null,2]
 * 
 * 1
 * /
 * 3
 * \
 * 2
 * 
 * 输出: [3,1,null,null,2]
 * 
 * 3
 * /
 * 1
 * \
 * 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: [3,1,4,null,null,2]
 * 
 * ⁠ 3
 * ⁠/ \
 * 1   4
 * /
 * 2
 * 
 * 输出: [2,1,4,null,null,3]
 * 
 * ⁠ 2
 * ⁠/ \
 * 1   4
 * /
 * ⁠ 3
 * 
 * 进阶:
 * 
 * 
 * 使用 O(n) 空间复杂度的解法很容易实现。
 * 你能想出一个只使用常数空间的解决方案吗？
 * 
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
var recoverTree = function (root) {
    // 大：第一个降的前面那个  小：最后一个降的后面那个
    let big = null;
    let small = null;
    let pre = null;
    function traverseNode(cur) {
        if (!cur) return;
        traverseNode(cur.left);
        if (pre !== null && pre.val > cur.val) {
            if (big === null) big = pre;
            small = cur;
        }
        pre = cur;
        traverseNode(cur.right);
    } 
    traverseNode(root);
    if (big !== null) {
        [big.val, small.val] = [small.val, big.val];
    }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = recoverTree;
// @after-stub-for-debug-end