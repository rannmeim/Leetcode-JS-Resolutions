/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 *
 * https://leetcode-cn.com/problems/course-schedule/description/
 *
 * algorithms
 * Medium (51.44%)
 * Likes:    487
 * Dislikes: 0
 * Total Accepted:    60.5K
 * Total Submissions: 113.7K
 * Testcase Example:  '2\n[[1,0]]'
 *
 * 你这个学期必须选修 numCourse 门课程，记为 0 到 numCourse-1 。
 * 
 * 在选修某些课程之前需要一些先修课程。 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示他们：[0,1]
 * 
 * 给定课程总量以及它们的先决条件，请你判断是否可能完成所有课程的学习？
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: 2, [[1,0]] 
 * 输出: true
 * 解释: 总共有 2 门课程。学习课程 1 之前，你需要完成课程 0。所以这是可能的。
 * 
 * 示例 2:
 * 
 * 输入: 2, [[1,0],[0,1]]
 * 输出: false
 * 解释: 总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0；并且学习课程 0 之前，你还应先完成课程 1。这是不可能的。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 输入的先决条件是由 边缘列表 表示的图形，而不是 邻接矩阵 。详情请参见图的表示法。
 * 你可以假定输入的先决条件中没有重复的边。
 * 1 <= numCourses <= 10^5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
/* 
图不能有环

判断图是否有环的算法。

首先我们介绍一个对于无向图和有向图通用的算法，先讲算法思路：

　　1.统计各个图中各个点的入度数（能够到达这个点的点的数量）。

　　2.然后找出入度数为0的点（无向图找入度数为1的点）。

　　3.删除入度数为0的点，将其边也删除。

　　4.重复2，直到所有点入度都为0，则为无环图，如果找不到入度为0的点，则为有环图。
 */
var canFinish = function (numCourses, prerequisites) {
    // 方法一： 使用数组statIn记录每个点入度
    // let usedPoints = new Set();
    // let statIn = Array(numCourses).fill(0);
    // let countExistedBorder = prerequisites.length;
    // // 统计各点入度
    // prerequisites.forEach(item => {
    //     statIn[item[1]]++;
    // })
    // while (true) {
    //     let num = statIn.findIndex((item, index) => item === 0 && !usedPoints.has(index))
    //     if (num === -1) break;
    //     usedPoints.add(num);
    //     prerequisites.forEach(item=>{
    //         // console.log(item, item[0] === num) // 加了console会超过时间限制
    //         if (item[0] === num) {
    //             statIn[item[1]]--;
    //             countExistedBorder--;
    //         }
    //     })
    // }
    // console.log('size', usedPoints.size)
    // console.log('countExistedBorder', countExistedBorder)
    // return !countExistedBorder

    /* 
        方法二： 广度优先 BFS  
        相比一改进的地方： 优化寻找入度为0的点  每次新产生的入度为0的点，必然是由删除边产生的
        时间复杂度： O(n^2)
        空间复杂度： O(n)
     */
    
    let queue = []; // 存放入度为0的点
    let statIn = Array(numCourses).fill(0); // -1 表示已访问过的入度为0的点
    let countVisited = 0;
    // 统计各点入度
    prerequisites.forEach(item => {
        statIn[item[1]]++;
    })

    statIn.forEach((item, index) => {
        if (item === 0) {
            queue.unshift(index);
            countVisited++;
            statIn[index] = -1;
        }
    })

    while (queue.length) {
        let num = queue.pop();
        // console.log(num);
        prerequisites.forEach(item=>{
            // console.log(item, item[0] === num) // 加了console会超过时间限制
            if (item[0] === num) {
                statIn[item[1]]--;
                if (statIn[item[1]] === 0) {
                    queue.unshift(item[1]); // 新入度为0的点入栈
                    statIn[item[1]] = -1;
                    countVisited++;
                }
            }
        })
    }
    console.log('countVisited', countVisited)
    return countVisited === numCourses

    // 方法三： 深度优先 DFS （待补充）
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = canFinish;
// @after-stub-for-debug-end