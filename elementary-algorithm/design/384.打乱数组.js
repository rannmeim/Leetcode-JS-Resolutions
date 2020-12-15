/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 *
 * https://leetcode-cn.com/problems/shuffle-an-array/description/
 *
 * algorithms
 * Medium (51.75%)
 * Likes:    109
 * Dislikes: 0
 * Total Accepted:    30.1K
 * Total Submissions: 55.3K
 * Testcase Example:  '["Solution","shuffle","reset","shuffle"]\n[[[1,2,3]],[],[],[]]'
 *
 * 给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。
 * 
 * 实现 Solution class:
 * 
 * 
 * Solution(int[] nums) 使用整数数组 nums 初始化对象
 * int[] reset() 重设数组到它的初始状态并返回
 * int[] shuffle() 返回数组随机打乱后的结果
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入
 * ["Solution", "shuffle", "reset", "shuffle"]
 * [[[1, 2, 3]], [], [], []]
 * 输出
 * [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]
 * 
 * 解释
 * Solution solution = new Solution([1, 2, 3]);
 * solution.shuffle();    // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。例如，返回
 * [3, 1, 2]
 * solution.reset();      // 重设数组到它的初始状态 [1, 2, 3] 。返回 [1, 2, 3]
 * solution.shuffle();    // 随机返回数组 [1, 2, 3] 打乱后的结果。例如，返回 [1, 3, 2]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10^6 
 * nums 中的所有元素都是 唯一的
 * 最多可以调用 5 * 10^4 次 reset 和 shuffle
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    /* 

    1.创建一个新数组 randomNums
    2.随机选取原数组中的元素，剪贴到新数组中
    3.重复 直到原数组为空
    随机选择元素：
    1. 位置pos = Math.round(Math.random()*nums.length)
    2. item = nums.splice(pos,1)
    3. randomNums.push(item)

    时间复杂度： O(n^2)
    乘方时间复杂度来自于 list.remove（list.pop）。每次操作都是线性时间的，总共发生 nn 次。
    空间复杂度： O(n)O(n)
    因为需要实现 重置 方法，需要额外的空间把原始数组另存一份，在重置的时候用来恢复原始状态。
     */

    // let nums = [...this.nums]
    // let randomNums = []
    // while (nums.length) {
    //     let pos = parseInt(Math.random() * nums.length)
    //     console.log('pos', pos, Math.random() * nums.length)
    //     randomNums.push(nums.splice(pos, 1)[0])
    // }
    // console.log(JSON.stringify(randomNums))
    // return randomNums

    /* 
    随机化 - 「洗牌算法 Fisher-Yates」
    时间复杂度 ： O(n)
    Fisher-Yates 洗牌算法时间复杂度是线性的，因为算法中生成随机序列，交换两个元素这两种操作都是常数时间复杂度的。
    空间复杂度： O(n)
    因为要实现 重置 功能，原始数组必须得保存一份，因此空间复杂度并没有优化。
     */

    let randomNums = [...this.nums]
    for (let i = 0; i < randomNums.length; i++){
        let pos = i + parseInt(Math.random() * (randomNums.length - i))
        let tmp = randomNums[pos]
        randomNums[pos] = randomNums[i]
        randomNums[i] = tmp
    }
    return randomNums
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end


// @after-stub-for-debug-begin
module.exports = Solution;
// @after-stub-for-debug-end