/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (52.17%)
 * Likes:    920
 * Dislikes: 0
 * Total Accepted:    179.6K
 * Total Submissions: 341.8K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 
 * 
 * 
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 * 
 * 
 * 
 * 
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 你可以运用递归和迭代两种方法解决这个问题吗？
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
var isSymmetric = function (root) {
    // BFS 层次遍历
    // let a = [0, 3, 0, 3];
    // let ra = a.reverse() // reverse在leetcode playground环境中失效
    let queue = [root];
    while (queue.length) {
        let len = queue.length;
        let arr = [];
        for (let i = 0; i < len; i++){
            let node = queue.shift();
            if (!node) arr.push(null)
            else {
                arr.push(node.val);
                queue.push(node.left || null);
                queue.push(node.right || null);
            }
        }
        let alen = arr.length;
        for (let i = 0; i < alen; i++){
            if (arr[i] !== arr[alen - 1 - i]) return false;
        }
    }
    return true;
};
// @lc code=end

