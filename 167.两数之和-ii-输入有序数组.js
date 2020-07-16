/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 *
 * https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/description/
 *
 * algorithms
 * Easy (54.09%)
 * Likes:    331
 * Dislikes: 0
 * Total Accepted:    108K
 * Total Submissions: 197.3K
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 * 
 * 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 * 
 * 说明:
 * 
 * 
 * 返回的下标值（index1 和 index2）不是从零开始的。
 * 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
 * 
 * 
 * 示例:
 * 
 * 输入: numbers = [2, 7, 11, 15], target = 9
 * 输出: [1,2]
 * 解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 * 
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
/* 
思路： 
方法一：
1. 先使用基数排序，使得查找时时间复杂度降低
2. 确定x  查找sum-x
O(n*log(n))

方法二：
1.创建arr=Array(nums[-1]).fill(-1)
2. 遍历nums，将nums[i]的值作为index, i作为arr中的值
3. 遍历arr，查找sum-i的值是否不为-1
O(n)
 */
var twoSum = function (numbers, target) {
    // 考虑最小的数 为负数
    let add = -numbers[0];
    target += 2 * add;
    let arrIndexedByVal = Array(numbers[numbers.length - 1] + add).fill(-1);
    numbers.forEach((item, index) => {
        arrIndexedByVal[index + add] = item; //让numbers[0]在arrIndexedByVal中的位置为0
    });
    let a, b;
    arrIndexedByVal.forEach((item, index) => {
        a = arrIndexedByVal[index];
        b = arrIndexedByVal[target - a];
        if (b !== -1 && a < b) {
            return
        }
    });

    return [a + 1, b + 1];    
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end