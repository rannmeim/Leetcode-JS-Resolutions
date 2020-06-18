/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (37.36%)
 * Likes:    1101
 * Dislikes: 0
 * Total Accepted:    290.8K
 * Total Submissions: 759.8K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if(!strs.length) return ''
    let prefix = [];
    let i = 0;
    while (true) {
        let c = '';
        for (let j = 0; j < strs.length; j++) {
            let item = strs[j];
            if(item.length <= i) return prefix.join('');
            if (c === '') {
                c = item[i];
            } else if (c !== item[i]) {
                console.log(prefix);
                return prefix.join('');
            }
        }
        prefix.push(c);
        i++;
    }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestCommonPrefix;
// @after-stub-for-debug-end