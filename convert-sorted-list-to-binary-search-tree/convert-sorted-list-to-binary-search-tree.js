/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let curr = head;
    let count = 0;
    while (curr) {
        count ++;
        curr = curr.next;
    }
    curr = head;
    const build = (start, end) => {
        if (start > end) return null;
        let mid = Math.floor((start + end) / 2);
        let node = new TreeNode();
        node.left = build(start, mid-1);
        node.val = curr.val;
        curr = curr.next;
        node.right = build(mid+1, end);
        return node;
    }
    return build(1, count);
};