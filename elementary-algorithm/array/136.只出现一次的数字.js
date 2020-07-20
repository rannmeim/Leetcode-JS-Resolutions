/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 *
 * https://leetcode-cn.com/problems/single-number/description/
 *
 * algorithms
 * Easy (68.78%)
 * Likes:    1380
 * Dislikes: 0
 * Total Accepted:    239.2K
 * Total Submissions: 345.5K
 * Testcase Example:  '[2,2,1]'
 *
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 
 * 说明：
 * 
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * 
 * 示例 1:
 * 
 * 输入: [2,2,1]
 * 输出: 1
 * 
 * 
 * 示例 2:
 * 
 * 输入: [4,1,2,1,2]
 * 输出: 4
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/* 
解题思路： 本题考察点为异或 ^ 的运用
我们知道异或的运算规则：

交换律 a^b^c === a^c^b
0^n = n
n^n = 0
而输入的数据为数组，那么就非常适合用reduce来解决

 */
var singleNumber = function(nums) {
    return nums.reduce((a,b) => a^b)
};
// @lc code=end

