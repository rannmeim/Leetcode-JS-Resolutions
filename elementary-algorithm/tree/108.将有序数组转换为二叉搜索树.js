/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 *
 * https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/description/
 *
 * algorithms
 * Easy (71.19%)
 * Likes:    526
 * Dislikes: 0
 * Total Accepted:    101K
 * Total Submissions: 137.3K
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
 * 
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 * 
 * 示例:
 * 
 * 给定有序数组: [-10,-3,0,5,9],
 * 
 * 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
 * 
 * ⁠     0
 * ⁠    / \
 * ⁠  -3   9
 * ⁠  /   /
 * ⁠-10  5
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // 方法一： 不考虑数组已排序的特性，从头开始，插入二叉搜索树，每次插入后平衡整个树
    // 方法二： 考虑到数组已排序，每次从数组的中点分隔，中点插入树中，两个子数组重复取中点分隔，并插入树中
    function insertToSearchTree(head, val) {
        function insert(node, val) {
            if(!node) node
            if (val === node.val) return;
            if (val < node.val) {
                if (!node.left) {
                    node.left = { val, left: null, right: null };
                    return;
                } else {
                    insert(node.left, val);
                }
            } else {
                if (!node.right) {
                    node.right = { val, left: null, right: null };
                    return;
                } else {
                    insert(node.right, val);
                }

            }
        }
        
        if (head) {
            insert(head, val);
        } else {
            head = { val, left: null, right: null };
        }

        return head;

    }
    let queue = []; // 存储子数组的头尾index 如[0, nums.length - 1]
    let head = null;
    nums.length && queue.push([0, nums.length - 1]);
    while (queue.length) { // 每次循环：取出队首数组，将数组中点加入树中。并将该数组由中间分隔成的两个子数组入队
        let cur = queue.shift();
        let centerIndex = Math.floor((cur[1] + cur[0]) / 2);
        if (centerIndex - 1 >= cur[0]) queue.push([cur[0], centerIndex - 1]);
        if (centerIndex + 1 <= cur[1]) queue.push([centerIndex + 1, cur[1]]);

        // 将nums[centerIndex]的值插入树中
        head = insertToSearchTree(head, nums[centerIndex]);
    }
    return head;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = sortedArrayToBST;
// @after-stub-for-debug-end