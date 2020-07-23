/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 *
 * https://leetcode-cn.com/problems/validate-binary-search-tree/description/
 *
 * algorithms
 * Medium (31.36%)
 * Likes:    676
 * Dislikes: 0
 * Total Accepted:    145K
 * Total Submissions: 455.3K
 * Testcase Example:  '[2,1,3]'
 *
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 * 
 * 假设一个二叉搜索树具有如下特征：
 * 
 * 
 * 节点的左子树只包含小于当前节点的数。
 * 节点的右子树只包含大于当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * ⁠   2
 * ⁠  / \
 * ⁠ 1   3
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * ⁠   5
 * ⁠  / \
 * ⁠ 1   4
 * / \
 * 3   6
 * 输出: false
 * 解释: 输入为: [5,1,4,null,null,3,6]。
 * 根节点的值为 5 ，但是其右子节点值为 4 。
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
 * @return {boolean}
 */
/* 
并不能保证该二叉树没有重复数字
 */
var isValidBST = function (root) {
    /**
     * @param {TreeNode} root
     * @param {Number} max root的父节点的值，即当前左子树的所有值都需小于max
     * @param {Number} min root的父节点的值，即当前右子树的所有值都需小于max
     * @return {Boolean}
     */
    function checkBST(root, max, min) {
        if (!root) return true;
        if ((root.left && root.left.val >= root.val) || (root.right && root.right.val <= root.val)) {
            return false;
        }
        if (max !== undefined && (root.left && root.left.val >= max || root.right && root.right.val >= max)) {
            return false;
        }
        if (min !== undefined && (root.left && root.left.val <= min || root.right && root.right.val <= min)) {
            return false;
        }
        return checkBST(root.left, root.val, min) && checkBST(root.right, max, root.val);
    }
    return checkBST(root);
};
// @lc code=end

