/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 *
 * https://leetcode-cn.com/problems/minimum-size-subarray-sum/description/
 *
 * algorithms
 * Medium (42.58%)
 * Likes:    381
 * Dislikes: 0
 * Total Accepted:    75.3K
 * Total Submissions: 169.8K
 * Testcase Example:  '7\n[2,3,1,2,4,3]'
 *
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续
 * 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：s = 7, nums = [2,3,1,2,4,3]
 * 输出：2
 * 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 如果你已经完成了 O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。
 * 
 * 
 */

 /* 
  */
// @lc code=start
/**
 * @param {number} s 正整数
 * @param {number[]} nums 正整数数组
 * @return {number}
 */
/* 
思路： 
找到以0为首位置的最小连续子数组
找到以1为首位置，长度小于已找到子数组
... 以此类推 直到len - 1

并不是双指针的方法，因为f，s指针不应该回退
 */
var minSubArrayLen = function (s, nums) {
    let max = 0;
    let f = 0; // 将要检判的位置
    let sl = 0; // 子串的开头位置
    let sum = 0;
    while (sl < nums.length) {
        if (f >= nums.length || max && f - sl >= max) {
            sl++;
            f = sl;
            sum = 0;
            continue;
        }
        sum += nums[f];
        if (sum >= s) {
            max = f - sl + 1;
            sl++;
            f = sl;
            sum = 0;
            continue;
        }
        f++;
    }
    return max;
};
// @lc code=end

