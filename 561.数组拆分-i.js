/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分 I
 *
 * https://leetcode-cn.com/problems/array-partition-i/description/
 *
 * algorithms
 * Easy (71.02%)
 * Likes:    174
 * Dislikes: 0
 * Total Accepted:    40.6K
 * Total Submissions: 56.9K
 * Testcase Example:  '[1,4,3,2]'
 *
 * 给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从1 到
 * n 的 min(ai, bi) 总和最大。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1,4,3,2]
 * 
 * 输出: 4
 * 解释: n 等于 2, 最大总和为 4 = min(1, 2) + min(3, 4).
 * 
 * 
 * 提示:
 * 
 * 
 * n 是正整数,范围在 [1, 10000].
 * 数组中的元素范围在 [-10000, 10000].
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 要求： 使用双指针
// 思路： 1.快速排序 2.取下标为偶数的元素相加
var arrayPairSum = function (nums) {
    function quickSort(nums) {
        if (nums.length < 2) return nums;
        // 取最后一个数当pivot（轴值）
        let left = 0;
        let right = nums.length - 1;
        let compLeft = true; // 比较是否小于轴值
        while (left < right) {
            console.log(nums)
            if (nums[left] <= nums[right]) {
                compLeft ? left++ : right--;
            } else {
                [nums[left], nums[right]] = [nums[right], nums[left]];
                compLeft ? right-- : left++;
            }
        }
        return [...quickSort(nums.slice(0,left)), nums[left], ...quickSort(nums.slice(left+1, nums.length))]
    }
    nums = quickSort(nums);
    let minSum = 0;
    nums.forEach((item, index)=>{
        if (!(index & 1)) minSum += item; //注意！优先级
    })
    return minSum

    // [1,4,3,2,1,4,3,21,4,3,2,-80]
};
// @lc code=end

