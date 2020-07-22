/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 *
 * https://leetcode-cn.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (39.68%)
 * Likes:    475
 * Dislikes: 0
 * Total Accepted:    184.5K
 * Total Submissions: 464.8K
 * Testcase Example:  '"hello"\n"ll"'
 *
 * 实现 strStr() 函数。
 * 
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置
 * (从0开始)。如果不存在，则返回  -1。
 * 
 * 示例 1:
 * 
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: haystack = "aaaaa", needle = "bba"
 * 输出: -1
 * 
 * 
 * 说明:
 * 
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 * 
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
 * 
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // return haystack.indexOf(needle);
    function buildNext(needle) {
        let len = needle.length;
        let next = [-1];
        let j = 0; // j代表准备填入的位置
        let t = next[0]; // t代表公共前后缀长度
        while (j < len - 1) {
            if (t < 0 || needle[j] === needle[t]) {
                j++;
                t++;
                next[j] = t;
            } else {
                t = next[t];
            }
        }
        console.log(JSON.stringify(next));
        return next
    }
    let next = buildNext(needle);
    let len1 = haystack.length;
    let len2 = needle.length;
    let i = 0; // 主串指针
    let j = 0; // 子串指针
    while (i < len1 && j < len2) {
        if (haystack[i] === needle[j]) {
            i++;
            j++
        } else {
            if (next[j] === -1) {
                i++;
            } else {
                j = next[j];
            }
        }
    }
    return j > len2 - 1 ? i - j : -1;
};
// @lc code=end

