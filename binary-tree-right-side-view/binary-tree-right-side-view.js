/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    let q = [root];
    const res = [];
    while (q.length) {
        let next = [];
        let first = q.shift();
        res.push(first.val);
        q.unshift(first);
        for (let curr of q) {
            if (curr.right) {
                next.push(curr.right);
            }
            if (curr.left) {
                next.push(curr.left);
            }
        }
        q = next;
    }
    return res;
};