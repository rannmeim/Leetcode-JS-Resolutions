/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (38.70%)
 * Likes:    898
 * Dislikes: 0
 * Total Accepted:    201.3K
 * Total Submissions: 515.4K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 
 * 示例：
 * 
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 * 
 * 
 * 说明：
 * 
 * 给定的 n 保证是有效的。
 * 
 * 进阶：
 * 
 * 你能尝试使用一趟扫描实现吗？
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
/* 
特殊情况：
删除第一个节点、最后一个节点（n=1）
 */
var removeNthFromEnd = function (head, n) {
    let f = head;
    let s = head; // 要删除节点的前一个节点
    let i = 0;
    while (i < n) {
        if (!f.next) {
            // 说明删除的是第一个节点
            return head.next;
        }
        f = f.next;
        i++;
    }
    while (f.next) {
        f = f.next;
        s = s.next;
    }
    s.next = s.next.next;
    return head;
};
// @lc code=end

