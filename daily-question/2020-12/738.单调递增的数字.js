/*
 * @lc app=leetcode.cn id=738 lang=javascript
 *
 * [738] 单调递增的数字
 *
 * https://leetcode-cn.com/problems/monotone-increasing-digits/description/
 *
 * algorithms
 * Medium (42.84%)
 * Likes:    122
 * Dislikes: 0
 * Total Accepted:    19.8K
 * Total Submissions: 40.2K
 * Testcase Example:  '10'
 *
 * 给定一个非负整数 N，找出小于或等于 N 的最大的整数，同时这个整数需要满足其各个位数上的数字是单调递增。
 * 
 * （当且仅当每个相邻位数上的数字 x 和 y 满足 x <= y 时，我们称这个整数是单调递增的。）
 * 
 * 示例 1:
 * 
 * 输入: N = 10
 * 输出: 9
 * 
 * 
 * 示例 2:
 * 
 * 输入: N = 1234
 * 输出: 1234
 * 
 * 
 * 示例 3:
 * 
 * 输入: N = 332
 * 输出: 299
 * 
 * 
 * 说明: N 是在 [0, 10^9] 范围内的一个整数。
 * 
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function (N) {
    /* 
    思路：1. 先看原数字，从高位到低位检查是否单调增
         2. 若某位x不符合，则x-1，后面的低位全部置为9，去掉最前面的0，再从高位开始检查
         3. 直到符合单调增
     */
    if (N < 10) return N
    let arr = (N + '').split('')
    for (let i = 1; i < arr.length; i++) {
        pre = arr[i - 1]
        if (pre > arr[i]) {
            arr[i - 1] = (Number(arr[i - 1]) + 9) % 10
            arr.splice(i, arr.length - i, ...new Array(arr.length - i).fill('9'))
            if (arr[0] == 0) arr.shift()
            i -= 2 // 从i-1再次开始循环，这样写避免了两层循环嵌套，减少代码
        }
    }
    return Number(arr.join(''))
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = monotoneIncreasingDigits;
// @after-stub-for-debug-end