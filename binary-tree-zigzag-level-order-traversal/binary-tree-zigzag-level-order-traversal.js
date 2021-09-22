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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    const res = [];
    const bfs = (node, level) => {
        if (!res[level]) res[level] = [];
        if (level % 2 === 0) res[level].push(node.val);
        else res[level].unshift(node.val)
        if (node.left) bfs(node.left, level + 1)
        if (node.right) bfs(node.right, level + 1);
    }
    bfs(root, 0);
    return res;
};