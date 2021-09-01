/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let start = new ListNode(0);
    start.next = head;
    let curr = start;
    let count = 0;
    let nextNode;
    var moveThrough = (curr) => {
        if (curr.next) {
            moveThrough(curr.next);
        }
        count ++;
        if (count === n) {
            nextNode = curr.next;
        }
        if (count === n + 1) {
            curr.next = nextNode;
        }
    }
    moveThrough(curr);
    return start.next;
};

