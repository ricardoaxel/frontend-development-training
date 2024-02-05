/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {

    function reverseNode (node) {

        //Base cases
        if(!node) return //If node it's null, it means it's the base case (i'ts a the bottom)
        reverseNode(node.left) //For the left side
        reverseNode(node.right) //For the right side

        //Swapping
        let tempNode = node.left
        node.left = node.right
        node.right = tempNode

    }
    reverseNode(root)
    return root
};