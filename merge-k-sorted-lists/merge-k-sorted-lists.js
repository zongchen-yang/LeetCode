/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeTwo = (a, b) => {
    let low = new ListNode(0);
    let curr = low;
    while (a && b) {
        if (a.val < b.val) {
            curr.next = a;
            a = a.next;
        } else {
            curr.next = b;
            b = b.next;
        }
        curr = curr.next;
    }
    if (a) {
        curr.next = a;
    } else {
        curr.next = b;
    }
    return low.next;
}

var mergeKLists = function(lists) {
    if (lists.length === 0) {
        return null;
    }
    while (lists.length > 1) {
        lists.push(mergeTwo(lists.shift(), lists.shift()));
    }
    return lists.shift();
};

