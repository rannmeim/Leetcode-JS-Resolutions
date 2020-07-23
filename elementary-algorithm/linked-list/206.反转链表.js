/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (69.25%)
 * Likes:    1110
 * Dislikes: 0
 * Total Accepted:    287K
 * Total Submissions: 410.5K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
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
 * @return {ListNode}
 */
var reverseList = function (head) {
    // 迭代
    // let stack = [];
    // let p = head;
    // while (p) {
    //     stack.push(p.val);
    //     p = p.next;
    // }
    // let newHead = null;
    // p = null;
    // while (stack.length) {
    //     let node = {
    //         val: stack.pop(),
    //         next: null,
    //     }
    //     if (!newHead) {
    //         p = newHead = node;
    //     } else {
    //         p.next = node;
    //         p = p.next;
    //     }
    // }
    // return newHead

    // 递归
    // /**
    //  * @param {ListNode} head 子链表的头指针
    //  * @return {ListNode} head 反转子链表的头指针  tail 反转子链表的尾指针
    //  * 每次递归： 将当前的node节点，拼接在 其后的反转后的子链表 上，并返回
    //  */
    // function buildReverseList(root) {
    //     if (!root) return null;
    //     let node = {
    //         val: root.val,
    //         next: null
    //     }
    //     if (!root.next) {
    //         return { head: node, tail: node }
    //     }
    //     let result = buildReverseList(root.next);
    //     result.tail.next = node;
    //     return {head: result.head, tail: node}
    // }
    // let result = buildReverseList(head);
    // return result ? result.head : null;

    // 原地反转链表: 空间复杂度为 O(1)的做法
    if (!head) return null;
    let p = head; // 指向即将改造的前一个节点
    p.oldnext = p.next;
    p.next = null;

    while (p.oldnext) {
        let g = p.oldnext;
        g.oldnext = g.next;
        g.next = p;
        let n = p.oldnext;
        delete p.oldnext;
        p = n;
    }
    delete p.oldnext;
    return p;
};
// @lc code=end

