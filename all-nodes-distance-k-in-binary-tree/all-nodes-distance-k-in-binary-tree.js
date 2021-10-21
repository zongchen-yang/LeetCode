/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    let res = [];
    if (!root) return res;
    const findTarget = (node, parent) => {
        if (!node) return null;
        node.parent = parent;
        if (node === target) return node;
        return findTarget(node.left, node) || findTarget(node.right, node);
    }
    const findKApart = (node, k) => {
        if (!node || node.visited) return;
        if (k === 0) {
            res.push(node.val);
            return;
        }
        node.visited = true;
        findKApart(node.left, k-1);
        findKApart(node.right, k-1);
        findKApart(node.parent, k-1);
    }
    let targetNode = findTarget(root, null);
    findKApart(targetNode, k);
    return res;
};