/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (30.68%)
 * Likes:    2325
 * Dislikes: 0
 * Total Accepted:    295.5K
 * Total Submissions: 960.4K
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例 1：
 * 
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入: "cbbd"
 * 输出: "bb"
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    s = s.split('');
    function longestPrefix(arr1, arr2) {
        arr1 = [...arr1].reverse();
        let i = 0;
        while (true) {
            if (arr1[i] == undefined || arr2[i] == undefined || arr1[i] != arr2[i]) {
                return arr1.slice(0, i); //从靠近中心往远处
            }
            i++;
        }
    }
    function longestPalindromeByCenter(center, isInterval) {  //center: index of center
        let right_half = "";
        if (isInterval) {
            right_half = longestPrefix(s.slice(0, center + 1), s.slice(center + 1), s.length);
            return [...right_half].reverse().concat(right_half).join('');
        } else {
            right_half = longestPrefix(s.slice(0, center), s.slice(center + 1), s.length);
            return [...[...right_half].reverse(), s[center]].concat(right_half).join('');
        }
    }
    let longest = '';
    for (let i = 0; i < s.length; i++){
        let tmp = longestPalindromeByCenter(i, false);
        if (tmp.length > longest.length) longest = tmp;
        if (i < s.length - 1) {
            tmp = longestPalindromeByCenter(i, true);
            if (tmp.length > longest.length) longest = tmp;
        }
    }
    return longest;

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestPalindrome;
// @after-stub-for-debug-end