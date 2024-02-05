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

    let st= [root]
    console.info(st.length, st)
    while(st.length > 0){
        let node = st.pop();
        if(node != null){
            //Swapping
            let tempNode = node.left
            node.left = node.right
            node.right = tempNode

            st.push(node.left)
            st.push(node.right)
        }
        console.info(st.length, st)
    }



    return root
};
let binaryTreeExample = {
    val: 4,
    left: {
        val: 2,
        left: {
            val: 1,
            left: null,
            right: null,
        },
        right:{
            val: 3,
            left: null,
            right: null,
        }
    },
    right: {
        val: 7,
        left: {
            val: 6,
            left: null,
            right: null,
        },
        right:{
            val: 9,
            left: null,
            right: null,
        }
    }
}
invertTree(binaryTreeExample)