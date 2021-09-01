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
var addTwoNumbers = function(l1, l2) {
    let start = new ListNode(0);
    let curr = start;
    let sum = 0;
    let passOn = 0;
    while (l1 || l2 || passOn) {
        sum += passOn;
        passOn = 0;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        if (sum > 9) {
            passOn = 1;
            sum %= 10;
        }
        curr.next = new ListNode(sum);
        sum = 0;
        curr = curr.next;
    }
    return start.next;
};