/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let small = new ListNode(0);
    let smallH = small;
    let big = new ListNode(0);
    let bigH = big;
    let curr = head, next;
    while (curr) {
        next = curr.next;
        if (curr.val < x) {
            small.next = curr;
            small = small.next;
        } else {
            big.next = curr;
            big = big.next;
        }
        curr = next;
    }
    small.next = bigH.next;
    big.next = null;
    return smallH.next;
};