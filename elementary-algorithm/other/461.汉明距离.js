/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 *
 * https://leetcode-cn.com/problems/hamming-distance/description/
 *
 * algorithms
 * Easy (76.35%)
 * Likes:    359
 * Dislikes: 0
 * Total Accepted:    86.7K
 * Total Submissions: 110.6K
 * Testcase Example:  '1\n4'
 *
 * 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。
 * 
 * 给出两个整数 x 和 y，计算它们之间的汉明距离。
 * 
 * 注意：
 * 0 ≤ x, y < 2^31.
 * 
 * 示例:
 * 
 * 
 * 输入: x = 1, y = 4
 * 
 * 输出: 2
 * 
 * 解释:
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 * ⁠      ↑   ↑
 * 
 * 上面的箭头指出了对应二进制位不同的位置。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    // let count = 0
    // while (x || y) {
    //     if ((x & 1) ^ (y & 1)) count++
    //     x >>>= 1
    //     y >>>= 1
    // }
    // return count
    /* 
    再简化下思路：
     */
    // let n = x ^ y
    // let count=0;
    // while(n){
    //     if(n&1){
    //         count++;
    //     }
    //     n>>>=1;
    // }
    // return count;

    /* 
    方法二：布赖恩·克尼根算法
    思想：布赖恩·克尼根位计数算法的基本思想。该算法使用特定比特位和算术运算移除等于 1 的最右比特位。
    当我们在 number 和 number-1 上做 AND 位运算时，原数字 number 的最右边等于 1 的比特会被移除。
    */
    let n = x ^ y
    let count = 0;
    while (n) {
        n &= n - 1
        count++
    }
    return count
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = hammingDistance;
// @after-stub-for-debug-end