/*
 * @lc app=leetcode.cn id=336 lang=javascript
 *
 * [336] 回文对
 *
 * https://leetcode-cn.com/problems/palindrome-pairs/description/
 *
 * algorithms
 * Hard (33.33%)
 * Likes:    109
 * Dislikes: 0
 * Total Accepted:    8.4K
 * Total Submissions: 22.8K
 * Testcase Example:  '["abcd","dcba","lls","s","sssll"]'
 *
 * 给定一组唯一的单词， 找出所有不同 的索引对(i, j)，使得列表中的两个单词， words[i] + words[j] ，可拼接成回文串。
 * 
 * 示例 1:
 * 
 * 输入: ["abcd","dcba","lls","s","sssll"]
 * 输出: [[0,1],[1,0],[3,2],[2,4]] 
 * 解释: 可拼接成的回文串为 ["dcbaabcd","abcddcba","slls","llssssll"]
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["bat","tab","cat"]
 * 输出: [[0,1],[1,0]] 
 * 解释: 可拼接成的回文串为 ["battab","tabbat"]
 * 
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
    /* 
    方法一： 暴力破解法
     */
    function isPalindrome(a, b) {
        // console.log(JSON.stringify(a), JSON.stringify(b))
        let s = a + b;
        // console.log(s)
        let len = s.length;
        let halfLen = Math.floor(len / 2);
        for (let i = 0; i < halfLen; i++){
            if (s[i] !== s[len - 1 - i]) {
                console.log('false')
                return false
            }
        }
        // console.log('true')
        return true
    }

    let len = words.length;
    let pairs = [];
    for (let i = 0; i < len; i++){
        let cur = words[i];
        for (let j = i + 1; j < len; j++){
            let next = words[j];
            // cur在前
            if (isPalindrome(cur, next)) pairs.push([i, j]);
            // cur在后
            if (isPalindrome(next, cur)) pairs.push([j, i]);
        }
    }
    console.log(JSON.stringify(pairs))
    return pairs;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = palindromePairs;
// @after-stub-for-debug-end