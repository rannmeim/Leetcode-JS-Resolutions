/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 *
 * https://leetcode-cn.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (33.92%)
 * Likes:    600
 * Dislikes: 0
 * Total Accepted:    121.9K
 * Total Submissions: 320.3K
 * Testcase Example:  '10'
 *
 * 统计所有小于非负整数 n 的质数的数量。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：n = 10
 * 输出：4
 * 解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 * 
 * 
 * 示例 2：
 * 
 * 输入：n = 0
 * 输出：0
 * 
 * 
 * 示例 3：
 * 
 * 输入：n = 1
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= n <= 5 * 10^6
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    /* 

    质数：大于1

    方法一： 枚举
    观察：排除4~n中的偶数
    遍历3~n中的奇数x
    再遍历3~x-1中的奇数，如果都不能整除x，则是一个质数

    结果：时间复杂度 O(n*sqrt(x))  空间复杂度 O(1) 超出时间限制
     */
    // const isPrime = (x) => {
    //     for (let i = 3; i < x; i+=2) {
    //         if (!(x % i)) return false
    //     }
    //     return true
    // }
    // if (n < 3) return 0 // 注意是求小于n的质数
    // let count=1
    // for (let i = 3; i < n; i += 2){
    //     count += isPrime(i)
    // }
    // return count

    /* 
    方法二：厄拉多塞筛法，简称埃氏筛。
    空间复杂度 O(n) 数组长度为n，如果一个元素占64位即8B, 最多8B·5*10^6≈40MB
    观察：1. 质数x的倍数2x,3x..一定是合数
         2. 合数一定可以拆解为几个质因数的乘积
         3. 合数x一定是某个质数y(y<x)的倍数
         4. 标记一个质数的倍数，可以从xx开始标记  因为2x,3x...(x-1)x之前肯定都被2,3...x-1标记过了
         5. 不需要标记合数m的倍数，因为它一定在之前就被该合数m的质因数所标记了
    步骤：1. 创建一个长度为n-1的数组Arr.fill(1) 1表示为质数
         2. 遍历x，x为从2到n-1中的质数
         3. 将x*x ~ m*x( m*x< n) 为下标的位置置为0
     */
    // const isPrime = new Array(n).fill(1)
    // let ans = 0
    // for (let i = 2; i < n; i++){
    //     if (isPrime[i]) {
    //         ans++
    //         for (let j = i * i; j < n; j += i) {
    //             isPrime[j] = 0
    //         }
    //     }
    // }
    // return ans

    /* 
    方法三：线性筛
    埃氏筛其实还是存在冗余的标记操作，比如对于 45 这个数，
    它会同时被 3,5 两个数标记为合数，因此我们优化的目标是让每个合数只被标记一次，
    这样时间复杂度即能保证为 O(n)

    核心点在于：如果 x 可以被 Pi整除，那么对于合数 y=x⋅p(i+1)而言，
    它一定在后面遍历到 (x/pi)·p(i+1)时被标记到，（即 y=(x/pi)·p(i+1)·pi）
    这保证了每个合数只会被其「最小的质因数」筛去，即每个合数被标记一次。

    观察：1. primes中的质数一定 <= x
         2. 如果x%primes[i]==0，说明x是合数，pi是x的最小质因数（因为是第一个能被整除的因数），
         则y=x⋅p(i+1)的最小质因数也是pi，且y=[(x/pi)·p(i+1)]·pi
    步骤：1. 创建长度为n-1的数组Arr.fill(1),创建空数组primes
         2. 遍历x，x是从2到n-1的所有数
         3. 在每次循环中，将primes中的数依次与x相乘得到的下标y位置置为0
         4. 当遇到x%primes[i]==0时，停止标记
     */
    const isPrime = new Array(n).fill(1) // 下标即为数字，isPrime[2] 表示数字2是质数
    const primes = []
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            primes.push(i)
        }
        for (let j = 0; j < primes.length && i*primes[j] < n; j++) {
            isPrime[i*primes[j]] = 0
            if (i % primes[j] == 0) break;
        }
    }
    return primes.length
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = countPrimes;
// @after-stub-for-debug-end