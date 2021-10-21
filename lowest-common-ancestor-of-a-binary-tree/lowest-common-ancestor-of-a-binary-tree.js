/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const findPQ = (curr, PQ, parent, level) => {
        if (!curr) return;
        curr.parent = parent;
        curr.level = level;
        if (curr === PQ) return curr;
        return findPQ(curr.left, PQ, curr, level+1) || findPQ(curr.right, PQ, curr, level+1);
    }
    let Pnode = findPQ(root, p, null, 0);
    let Qnode = findPQ(root, q, null, 0);
    while (Pnode !== Qnode) {
        if (Pnode.level > Qnode.level) Pnode = Pnode.parent;
        else Qnode = Qnode.parent;
    }
    return Pnode;
};