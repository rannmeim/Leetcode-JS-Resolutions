/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (42.02%)
 * Likes:    568
 * Dislikes: 0
 * Total Accepted:    107.5K
 * Total Submissions: 251.9K
 * Testcase Example:  '[1,2]'
 *
 * 请判断一个链表是否为回文链表。
 * 
 * 示例 1:
 * 
 * 输入: 1->2
 * 输出: false
 * 
 * 示例 2:
 * 
 * 输入: 1->2->2->1
 * 输出: true
 * 
 * 
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * @return {boolean}
 */
/* 
时间复杂度O(n) 空间复杂度O(1) 的方法
1. 计算长度找中点  1.遍历计算长度再找中点 2.使用快慢指针，快走二，慢走一，一次遍历找到中点
2. 反转 后半段链表
3. 计算是否回文
4. 恢复反转的链表
 */
var isPalindrome = function (head) {
    function reverseList(head) {
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
    }
    if (!head) return true;
    // 1. 找中点
    let f = head.next;
    let s = head;
    while (f && f.next) {
        f = f.next.next;
        s = s.next;
    }
    // 此时 s 指向后半段起点的前一个点，（长度为奇数时，即指向中点）
    // 2. 反转后半段
    let rhead = reverseList(s.next);
    s.next = null;
    // 3. 判断是否回文
    let p = head;
    let g = rhead;
    let result = true;
    while (p && g) {
        if (p.val !== g.val) {
            result = false;
            break;
        }
        p = p.next;
        g = g.next;
    }
    // 4. 还原
    let rrhead = reverseList(rhead);
    s.next = rrhead;
    return result
};
// @lc code=end

