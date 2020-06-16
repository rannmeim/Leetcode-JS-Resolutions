/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 *
 * https://leetcode-cn.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (42.64%)
 * Likes:    453
 * Dislikes: 0
 * Total Accepted:    104K
 * Total Submissions: 243.8K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * 给出一个区间的集合，请合并所有重叠的区间。
 * 
 * 示例 1:
 * 
 * 输入: [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * 
 * 
 * 示例 2:
 * 
 * 输入: [[1,4],[4,5]]
 * 输出: [[1,5]]
 * 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 * 
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    function canMerge(part1, part2) {
        if (part1[1] < part2[0] || part2[1] < part1[0]) {
            return false;
        }
        let x = part1[0] > part2[0] ? part2[0] : part1[0];
        let y = part1[1] > part2[1] ? part1[1] : part2[1];
        return [x, y];
    }
    let merged = [];
    let queue = intervals;
    while (queue.length) {
        if (!merged.length) {
            merged.push(queue.shift());
            continue;            
        }
        let cur = queue.shift();
        let i = 0;
        let hasMerged = false;
        while (i < merged.length) {
            let part = merged[i];
            let afterMerge = canMerge(cur, part);
            if (afterMerge) {
                hasMerged = true;
                merged.splice(i, 1);
                queue.push(afterMerge);
                break;
            }
            i++;
        }
        if (!hasMerged) merged.push(cur);
    }
    // 从小到大排列merged
    merged.sort((a, b) => a[0] - b[0]);
    console.log(merged);
    return merged;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = merge;
// @after-stub-for-debug-end