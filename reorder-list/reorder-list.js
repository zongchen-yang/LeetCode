/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let curr = head, stack = [];
    while (curr) {
        stack.push(curr);
        curr = curr.next;
    }
    stack.shift();
    let len = stack.length;
    curr = head;
    for (let i = 1; i <= len; i++) {
        if (i % 2 === 0) {
            curr.next = stack.shift();
        } else {
            curr.next = stack.pop();
        }
        curr = curr.next;
    }
    curr.next = null
};