/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (51.33%)
 * Likes:    2292
 * Dislikes: 0
 * Total Accepted:    301.2K
 * Total Submissions: 578.7K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 示例:
 * 
 * 输入: [-2,1,-3,4,-1,2,1,-5,4]
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 
 * 
 * 进阶:
 * 
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    /* !< 
            分治法与动态规划
        共同点 ：二者都要求原问题具有最优子结构性质,都是将原问题分而治之,分解成若干个规模较小(小到很容易解决的程序)的子问题.然后将子问题的解合并,形成原问题的解.

        不同点：分治法将分解后的子问题看成相互独立的，通过用递归来做。

        动态规划将分解后的子问题理解为相互间有联系,有重叠部分，需要记忆，通常用迭代来做。
     >! */
    
    /* 
    方法二：分治
    设区间为[l,r]，将区间一分为二，成为两个子区间，[l,m] [m+1,r], m = Math.floor((l+r)/2)   「m = (l + r) >> 1」
    对于一个区间[l,r]需要维护的数据有：
    1. lSum l为左端点的连续子数组最大和  值为
    2. rSum r为右端点的连续子数组最大和
    3. mSum 连续子数组最大和
    4. iSum [l,r]区间和 

    1. 求 iSum： 左子区间 iSum + 右子区间iSum
    2. 求 lSum： 左子区间的lSum  或 左子区间的iSum + 右子区间lSum  取其大者
    3. 求 rSum： 右子区间的rSum  或 右子区间的iSum + 左子区间rSum  取其大者
    4. 求 mSum（即题目所求）： 左子区间mSum 或 右子区间mSum 或 左子区间rSum+右子区间lSum 三者取其大者
    5. 对于区间[l,r]，分成[l,m] [m+1,r] 分治求解，递归到区间只剩一个元素时递归开始回升

    这个分治方法类似于「线段树求解 LCIS 问题」的 pushUp 操作。  数据结构——线段树。
     */

    function getMSum(l, r) {
        if(l === r) return nums[l]
        let m = (l + r) >> 1
        return Math.max(getMSum(l, m), getMSum(m + 1, r), getRSum(l, m) + getLSum(m + 1, r))
    }
    function getLSum(l, r) {
        if(l === r) return nums[l]
        let m = (l + r) >> 1
        return Math.max(getLSum(l, m), getISum(l, m) + getLSum(m + 1, r))
    }
    function getRSum(l, r) {
        if(l === r) return nums[l]
        let m = (l + r) >> 1
        return Math.max(getRSum(m + 1, r), getISum(m + 1, r) + getRSum(l, m))

    }
    function getISum(l, r) {
        if(l === r) return nums[l]
        let m = (l + r) >> 1
        return getISum(l, m) + getISum(m + 1, r)

    }
    
    result = getMSum(0, nums.length - 1)
    console.log(result)
    return result

    
     /* 
    方法一：动态规划：
    设f(i)为以第i个数结尾的连续子数组最大和，则我们要求的就是f(i) (0<=i<n)的最大值
    且观察到f(i-1)与f(i)的关系为，f(i) = ( f(i-1) > 0 ? f(i-1) : 0 ) + ai
    所以*动态规划转移方程*为： f(i) = max{f(i-1) + ai, ai}
     */

    if (!nums || !nums.length) return 0;
    let pre = 0;
    let max = null;
    nums.forEach(item => {
        pre = (pre > 0 ? pre : 0) + item; // 以当前位置为终点的连续子数组最大和
        max = max === null ? pre : Math.max(pre, max); // 二者相比较取最大
    })
    return max
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxSubArray;
// @after-stub-for-debug-end