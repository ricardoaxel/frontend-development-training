/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    while(root){
        // If the root val is greater we look on the left otherwise in the right
        if(root.val > p.val && root.val > q.val){
            root = root.left
        }
        else if(root.val < p.val && root.val < q.val){
            root = root.right
        }
        //If it's not greater or less for both that means that it's the las bottom
        else{
            break;
        }
    }
    return root
};