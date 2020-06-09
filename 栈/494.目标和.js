/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/*
给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，你都可以从 + 或 -中选择一个符号添加在前面。

返回可以使最终数组和为目标数 S 的所有添加符号的方法数。


*/
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
    let calc = {
        '+': (num, sum) => sum + num,
        '-': (num, sum) => sum - num,
    }
    let count = 0;
    // op 操作符  step 需要计算的index值  step之前的sum
    let addNum = function (op, step, sum) {
        //入口
        if (step !== -1) {
            sum = calc[op](nums[step], sum);
        }
        // 出口
        if (step == nums.length - 1) {
            if (sum == S) count++;
            return;
        }
        addNum('+', step + 1, sum);
        addNum('-', step + 1, sum);

    }
    addNum('', -1, 0);
    console.log('count', count);
    return count
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findTargetSumWays;
// @after-stub-for-debug-end