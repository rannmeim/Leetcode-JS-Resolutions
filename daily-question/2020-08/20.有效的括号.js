/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (41.72%)
 * Likes:    1767
 * Dislikes: 0
 * Total Accepted:    363.5K
 * Total Submissions: 856.6K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    let map = {
        '{': '}',
        '(': ')',
        '[': ']',
    }
    let i = 0;
    let len = s.length;
    while (i < len) {
        if (map[s[i]]) stack.push(s[i]);
        else if(map[stack.pop()] !== s[i]) return false;
        i++;
    }
    return stack.length ? false : true;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isValid;
// @after-stub-for-debug-end