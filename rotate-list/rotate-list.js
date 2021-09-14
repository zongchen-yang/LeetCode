/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let dummy = new ListNode();
    let left = dummy;
    let right = dummy;
    let length = 0;
    dummy.next = head;
    while (right.next) {
        right = right.next;
        length ++;
    }
    k = k % length;
    for (let i = 1; i <= length - k; i++) {
        left = left.next;
    }
    right.next = dummy.next;
    dummy.next = left.next;
    left.next = null;
    return dummy.next;
};