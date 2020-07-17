/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续1的个数
 *
 * https://leetcode-cn.com/problems/max-consecutive-ones/description/
 *
 * algorithms
 * Easy (56.49%)
 * Likes:    108
 * Dislikes: 0
 * Total Accepted:    43.8K
 * Total Submissions: 77.3K
 * Testcase Example:  '[1,0,1,1,0,1]'
 *
 * 给定一个二进制数组， 计算其中最大连续1的个数。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1,1,0,1,1,1]
 * 输出: 3
 * 解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.
 * 
 * 
 * 注意：
 * 
 * 
 * 输入的数组只包含 0 和1。
 * 输入数组的长度是正整数，且不超过 10,000。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = 0
    let f = 0 // 表示即将判别的位置
    let s = f // 表示可能的第一个1的位置   初始：
    while (f < nums.length) {
        if (nums[f] === 0 || nums[f] === 1 && f === nums.length - 1) {
            let len = nums[f] === 1 ? f - s + 1 : f - s 
            max = len > max ? len : max
            s = f + 1
        }
        f++
    }
    return max
};
// @lc code=end

