/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (62.74%)
 * Likes:    1161
 * Dislikes: 0
 * Total Accepted:    321.4K
 * Total Submissions: 506.3K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let p1 = l1; // 指向列表即将校验的一项
    let p2 = l2;
    let newHead = null;
    let p = null; // 指向新链表的最后一项
    while (p1 || p2) {
        let node = {
            val: null,
            next: null
        }
        if ((p1 && p2 && p1.val > p2.val) || !p1) {
            node.val = p2.val;
            if (!newHead) {
                p = newHead = node;
            } else {
                p.next = node;
                p = p.next;
            }
            p2 = p2.next;
        } else {
            node.val = p1.val;
            if (!newHead) {
                p = newHead = node;
            } else {
                p.next = node;
                p = p.next;
            }
            p1 = p1.next;
        }
    }
    return newHead;
};
// @lc code=end

