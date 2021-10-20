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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    const q = [root];
    let left, right;
    let count = 0;
    while (q.length) {
        let len = q.length;
        for (let i = 0; i < len; i++) {
            let curr = q.shift();
            if (curr.val === x) left = count;
            if (curr.val === y) right = count;
            if (curr.left && curr.right && (curr.left.val === x && curr.right.val === y || curr.left.val === y && curr.right.val === x)) return false;
            if (curr.left) q.push(curr.left);
            if (curr.right) q.push(curr.right);
        }
        count ++;
        if (left && left === right) return true;
    }
    return false;
};