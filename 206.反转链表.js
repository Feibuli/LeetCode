/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (68.93%)
 * Likes:    1059
 * Dislikes: 0
 * Total Accepted:    271K
 * Total Submissions: 389.2K
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
var reverseList = function(head) {
  let pre = null;
  let cur = head;
  let temp = {};
  while (cur) {
    // 记录当前的下一个节点
    temp = cur.next;
    // 当前节点的next指向上一个节点 val还是当前节点
    cur.next = pre;
    // 使pre等于调换了next方向的当前节点
    pre = cur;
    // 使cur后移一位
    cur = temp;
  }
  return pre;
};
// @lc code=end

