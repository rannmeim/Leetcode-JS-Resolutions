/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 *
 * https://leetcode-cn.com/problems/power-of-three/description/
 *
 * algorithms
 * Easy (46.89%)
 * Likes:    133
 * Dislikes: 0
 * Total Accepted:    65.5K
 * Total Submissions: 137.3K
 * Testcase Example:  '27'
 *
 * 给定一个整数，写一个函数来判断它是否是 3 的幂次方。如果是，返回 true ；否则，返回 false 。
 * 
 * 整数 n 是 3 的幂次方需满足：存在整数 x 使得 n == 3^x
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 27
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 0
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：n = 9
 * 输出：true
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：n = 45
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * -2^31 
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 你能不使用循环或者递归来完成本题吗？
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    /* 
    方法一：脱离原理法 利用对数换底公式，直接调用Math函数
    结果：幸运的没被测试用例查出错误 不可取🙅‍♂️
     */
    if (n < 1) return false
    if (n == 1) return true
    // 听说能被三整除的，各位相加就能被三整除
    // 如果不加这步，19682的结果会错，实则false，输出true
    if ((n + "").split("").reduce((pre, next) => Number(pre) + Number(next)) % 3 !== 0) return false;
    // 为了抵消Math运算的精度误差(这误差比Number.EPLISON大)，这里只保留小数点后四位，保留几位数字对性能影响很大
    return (Math.round((Math.log(n) / Math.log(3)) * 10000) / 10000) % 1 == 0 ? true : false
    /* 
    方法二：循环迭代
    步骤：每次/3 如果余数不为0->false 直到==1->true
     */
    /* 
    方法三：基准转换
    思想：10进制转3进制，把我们的数转换成基3，并且表示形式是 100…0，那么这个数就是3的幂。
         转换进制使用系统自带函数
     */
    n = n.toString(3) // 转为3进制
    return /^10*$/.test(n)
};
// @lc code=end

