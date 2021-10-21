/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function(p, q) {
    const getDepth = (node) => {
        let depth = 0;
        while (node) {
            node = node.parent;
            depth++;
        }
        return depth
    }
    let pDepth = getDepth(p);
    let qDepth = getDepth(q);
    while (p !== q) {
        if (pDepth < qDepth) {
            q = q.parent;
            qDepth--;
        } else {
            p = p.parent;
            pDepth--;
        }
    }
    return p;
};