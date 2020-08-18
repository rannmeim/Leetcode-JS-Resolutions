/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (54.15%)
 * Likes:    1086
 * Dislikes: 0
 * Total Accepted:    245.8K
 * Total Submissions: 450.1K
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。
 * 
 * 注意：你不能在买入股票前卖出股票。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: [7,1,5,3,6,4]
 * 输出: 5
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 * ⁠    注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [7,6,4,3,1]
 * 输出: 0
 * 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    /* 
    1. 找每个位置其后大于该位置的最大数
    2. 从后往前找，因为前面位置可以依赖后面位置
    */
    if (!prices.length) return 0;
    let maxIncome = 0;
    let backMaxBigger = 0; // 存储上一位大于它的最大数

    for (let i = prices.length - 2; i > -1; i--){
        rearMax = Math.max(backMaxBigger, prices[i + 1]);
        backMaxBigger = rearMax > prices[i] ? rearMax : 0;
        maxIncome = backMaxBigger - prices[i] > maxIncome ? backMaxBigger - prices[i] : maxIncome;
    }
    console.log(maxIncome);
    return maxIncome;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxProfit;
// @after-stub-for-debug-end