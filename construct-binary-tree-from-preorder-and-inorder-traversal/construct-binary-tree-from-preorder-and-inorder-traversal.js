/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // let p = 0, i = 0;
    // const build = (stop) => {
    //     if (inorder[i] !== stop) {
    //         let root = new TreeNode(preorder[p++]);
    //         root.left = build(root.val);
    //         i++;
    //         root.right = build(stop);
    //         return root;
    //     }
    //     return null;
    // }
    // return build();
    
    let p = 0, i = 0;
    const build = (stop) => {
        if (inorder[i] === stop) {
            return null;
        } else {
            let node = new TreeNode(preorder[p]);
            p++;
            node.left = build(node.val);
            i++;
            node.right = build(stop);
            return node;
        }
    }
    return build();
};