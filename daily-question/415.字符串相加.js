/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 *
 * https://leetcode-cn.com/problems/add-strings/description/
 *
 * algorithms
 * Easy (49.99%)
 * Likes:    211
 * Dislikes: 0
 * Total Accepted:    52.3K
 * Total Submissions: 102K
 * Testcase Example:  '"0"\n"0"'
 *
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 * 
 * 注意：
 * 
 * 
 * num1 和num2 的长度都小于 5100.
 * num1 和num2 都只包含数字 0-9.
 * num1 和num2 都不包含任何前导零。
 * 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let len1 = num1.length;
    let len2 = num2.length;
    let maxLen = Math.max(len1, len2);
    let carry = 0;
    let sum = '';
    for (let i = 0; i < maxLen; i++){
        let c1 = isNaN(parseInt(num1[len1 - 1 - i])) ? 0 : parseInt(num1[len1 - 1 - i]);
        let c2 = isNaN(parseInt(num2[len2 - 1 - i])) ? 0 : parseInt(num2[len2 - 1 - i]);
        sum = (c1 + c2 + carry) % 10 + sum;
        carry = Math.floor((c1 + c2 + carry) / 10);
    }
    if(carry) sum = carry + sum;
    return sum;
};
// @lc code=end

