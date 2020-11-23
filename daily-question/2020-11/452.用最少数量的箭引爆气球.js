/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 *
 * https://leetcode-cn.com/problems/minimum-number-of-arrows-to-burst-balloons/description/
 *
 * algorithms
 * Medium (50.41%)
 * Likes:    242
 * Dislikes: 0
 * Total Accepted:    36K
 * Total Submissions: 71.3K
 * Testcase Example:  '[[10,16],[2,8],[1,6],[7,12]]'
 *
 * 
 * 在二维空间中有许多球形的气球。对于每个气球，提供的输入是水平方向上，气球直径的开始和结束坐标。由于它是水平的，所以纵坐标并不重要，因此只要知道开始和结束的横坐标就足够了。开始坐标总是小于结束坐标。
 * 
 * 一支弓箭可以沿着 x 轴从不同点完全垂直地射出。在坐标 x 处射出一支箭，若有一个气球的直径的开始和结束坐标为 xstart，xend， 且满足
 * xstart ≤ x ≤ xend，则该气球会被引爆。可以射出的弓箭的数量没有限制。
 * 弓箭一旦被射出之后，可以无限地前进。我们想找到使得所有气球全部被引爆，所需的弓箭的最小数量。
 * 
 * 给你一个数组 points ，其中 points [i] = [xstart,xend] ，返回引爆所有气球所必须射出的最小弓箭数。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：points = [[10,16],[2,8],[1,6],[7,12]]
 * 输出：2
 * 解释：对于该样例，x = 6 可以射爆 [2,8],[1,6] 两个气球，以及 x = 11 射爆另外两个气球
 * 
 * 示例 2：
 * 
 * 
 * 输入：points = [[1,2],[3,4],[5,6],[7,8]]
 * 输出：4
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：points = [[1,2],[2,3],[3,4],[4,5]]
 * 输出：2
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：points = [[1,2]]
 * 输出：1
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：points = [[2,3],[2,3]]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * points[i].length == 2
 * -2^31 start end 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    /* 
    1. 按起点排序
    2. 取未被射中的第一条气球 p[s, e]，overlap = [s, e]
    3. 找到下一个起点介于 overlap 之间的气球[s1 e1]
    4. 更新 overlap = [s1, min(e, e1)]
    5. 重复2、3步，直到找不到符合条件的气球
    6. 射出箭，箭的位置为 x=s
    7. 跳回第二步，直至无未射中的气球
     */
    /* 
    时间复杂度
    O(n*log n + n) = O(n*log n)
     */
    // !< sort函数: (a,b) => 返回<0 则 a在b前 >!
    if (!points || !points.length) return 0;
    console.log(points)
    points = points.sort((a, b) => a[0] - b[0]);
    console.log(points)
    let firstUnshotIndex = 0;
    let countArrow = 0;
    while (points.length > firstUnshotIndex) {
        let overlap = points[firstUnshotIndex];
        for (firstUnshotIndex++; firstUnshotIndex < points.length; firstUnshotIndex++){
            let cur = points[firstUnshotIndex];
            if (cur[0] < overlap[0] || cur[0] > overlap[1]) {
                break;
            }
            overlap = [overlap[0], Math.min(overlap[1], cur[1])]
        }
        countArrow++;
    }
    console.log(countArrow)
    return countArrow
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findMinArrowShots;
// @after-stub-for-debug-end