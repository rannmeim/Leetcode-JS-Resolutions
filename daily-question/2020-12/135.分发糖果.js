/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 *
 * https://leetcode-cn.com/problems/candy/description/
 *
 * algorithms
 * Hard (43.44%)
 * Likes:    400
 * Dislikes: 0
 * Total Accepted:    51.5K
 * Total Submissions: 108.9K
 * Testcase Example:  '[1,0,2]'
 *
 * 老师想给孩子们分发糖果，有 N 个孩子站成了一条直线，老师会根据每个孩子的表现，预先给他们评分。
 * 
 * 你需要按照以下要求，帮助老师给这些孩子分发糖果：
 * 
 * 
 * 每个孩子至少分配到 1 个糖果。
 * 相邻的孩子中，评分高的孩子必须获得更多的糖果。
 * 
 * 
 * 那么这样下来，老师至少需要准备多少颗糖果呢？
 * 
 * 示例 1:
 * 
 * 输入: [1,0,2]
 * 输出: 5
 * 解释: 你可以分别给这三个孩子分发 2、1、2 颗糖果。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [1,2,2]
 * 输出: 4
 * 解释: 你可以分别给这三个孩子分发 1、2、1 颗糖果。
 * ⁠    第三个孩子只得到 1 颗糖果，这已满足上述两个条件。
 * 
 */

// @lc code=starts'z's'z'z'z'z'z'z'z'z'z'z'z'z'z'z'z'z'z'z'z'z'z'z'z'z'z'z'z'z'z'z'z'z'z'z'z'z'z'z'z'z'z's's's's's's's'z's's's's'z's'z's's's'sz
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    /* 
    注意：评分更高的孩子必须比他两侧的邻位孩子获得更多的糖果。 但如果分相同，糖果数可以不同

    思路：
    从左到右走一遍，当遇到最低点 给1颗糖，升时+1  
    当遇到下降或相等给1颗糖 发现若前一个比当前分高但糖等于也1 则回溯 前一个++ 再看前前个  直到不需要++（当后一个更多）  然后再回到当前进度
     */
    console.log(JSON.stringify(ratings))
    let len = ratings.length
    let sugar = new Array(ratings.length).fill(0) // 记录所有小朋友的糖数 （其实只记录最近的最高峰之后的就可以）
    let i = -1
    while (++i < len) {
        console.log(JSON.stringify(sugar))
        if (i == 0) {
            sugar[i] = 1
            continue
        }
        let pre = ratings[i - 1]
        let cur = ratings[i]
        if (pre < cur) {
            sugar[i] = sugar[i-1] + 1
        } else if (pre == cur) {
            sugar[i] = 1
        } else {
            sugar[i] = 1
            // 开始回溯
            let back = i - 1
            while (ratings[back] > ratings[back + 1] && sugar[back] <= sugar[back + 1]) {
                sugar[back]++
                back--
                console.log('in back', JSON.stringify(sugar))
            }
        }
    }
    console.log(JSON.stringify(sugar))
    console.log(sugar.reduce((a, b) => a + b))
    return sugar.reduce((a, b) => a + b)
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = candy;
// @after-stub-for-debug-end