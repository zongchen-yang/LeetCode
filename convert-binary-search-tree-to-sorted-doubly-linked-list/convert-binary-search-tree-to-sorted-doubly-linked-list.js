/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    if (!root) return;
    let start, prev;
    const recurse = (node) => {
        if (node.left) recurse(node.left);
        if (!start) start = node;
        if (!prev) prev = node;
        else { 
            prev.right = node;
            node.left = prev;
        }
        prev = node;
        if (node.right) recurse(node.right);
    }
    recurse(root);
    start.left = prev;
    prev.right = start;
    return start;
};