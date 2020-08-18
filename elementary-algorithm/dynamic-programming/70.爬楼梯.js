/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (48.80%)
 * Likes:    1185
 * Dislikes: 0
 * Total Accepted:    261.6K
 * Total Submissions: 520.4K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 * 
 * 示例 1：
 * 
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 示例 2：
 * 
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    /* 斐波那切数列 */
    let ways = Array(n).fill(0); // 存储已经得到的数值
    ways[1] = 1;
    ways[2] = 2;
    function waysToClimb(n) {
        if (ways[n]) return ways[n];
        let result = waysToClimb(n - 2) + waysToClimb(n - 1); // 说明 n > 2，所以前面要考虑 n==1 和 n==2 时
        ways[n] = result;
        return result
    }
    return waysToClimb(n);
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = climbStairs;
// @after-stub-for-debug-end