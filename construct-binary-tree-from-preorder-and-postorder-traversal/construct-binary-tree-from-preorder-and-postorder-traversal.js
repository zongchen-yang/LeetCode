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
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
    let preIdx = 0, postIdx = 0;
    
    function helper() {
        const node = new TreeNode(pre[preIdx++]);
        if(node.val !== post[postIdx]) {
            node.left = helper();
        }
        if(node.val !== post[postIdx]) {
            node.right = helper();
        }
        ++postIdx;
        return node;
    }
    return helper();
}