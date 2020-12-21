/*
 * @lc app=leetcode.cn id=767 lang=javascript
 *
 * [767] 重构字符串
 *
 * https://leetcode-cn.com/problems/reorganize-string/description/
 *
 * algorithms
 * Medium (41.20%)
 * Likes:    209
 * Dislikes: 0
 * Total Accepted:    23.5K
 * Total Submissions: 50.8K
 * Testcase Example:  '"aab"'
 *
 * 给定一个字符串S，检查是否能重新排布其中的字母，使得两相邻的字符不同。
 * 
 * 若可行，输出任意可行的结果。若不可行，返回空字符串。
 * 
 * 示例 1:
 * 
 * 
 * 输入: S = "aab"
 * 输出: "aba"
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: S = "aaab"
 * 输出: ""
 * 
 * 
 * 注意:
 * 
 * 
 * S 只包含小写字母并且长度在[1, 500]区间内。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function (S) {
    /*
    分析：当出现次数最多字符的数量 - 1大于剩余字符总数量时，一定不可行  比如 1212131313111
    1.统计每种字符出现的次数
    2.找到出现次数最多的字符，排成一列，在队列的每个字符间空位插入其他字符
    3.如果剩余字符的数量不足以填补队列中相邻位置的空位时，则不可行
    4.填补空位后，余下的字符依序插入队列中，则得到一个可行的结果

    【进阶】
    原第四步：组成二维数组，再拼接成字符串
    进阶法：先排数组偶数下标，再按序排奇数下标，先排次数最多的字符
     */
    let map = {}
    let maxChar = null
    let maxLen = 0
    for (let ss of S) {
        !map[ss] ? map[ss] = 1 : map[ss]++
        if (map[ss] > maxLen) {
            // 记录最大的元素
            maxLen = map[ss]
            maxChar = ss
        }
    }
    // 判断是否可行
    if (S.length - maxLen < maxLen - 1) return ''
    // 构建二维数组
    let arr2d = [new Array(maxLen).fill(maxChar)]
    delete map[maxChar]
    let full = true; // 标志从开头，还是中间开始拼接
    mapArr = Object.entries(map)

    let i = 0;
    let arr = null; // 指向当前正在拼接的数组
    while (i < mapArr.length) {
        let item = mapArr[i]
        if (!full) {
            let notEnoughItem = false
            for (; maxLen > arr.length;) {
                if (!item[1]) {
                    notEnoughItem = true
                    break;
                }
                arr.push(item[0])
                item[1]--
            }
            // 结束后三种情况 还是不够一行 -> i++、刚好够一行-> full = true, i++、还需要另起一行 -> full = true
            if (!notEnoughItem) {
                full = true
                if (item[1]) continue
            }
        } else {
            // 添加一行 两种情况 刚好够一行 -> i++、不够一行 full=false,i++
            arr = new Array(item[1]).fill(item[0])
            arr2d.push(arr)
            full = arr.length < maxLen ? false : true;
            if (arr.length < maxLen) full = false // 不够一行
        }
        i++
    }

    // 二维数组输出字符串
    let result = ''
    for (let x = 0; x < maxLen; x++) {
        for (let y = 0; y < arr2d.length; y++) {
            result += arr2d[y][x] || ''
        }
    }
    return result
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reorganizeString;
// @after-stub-for-debug-end
