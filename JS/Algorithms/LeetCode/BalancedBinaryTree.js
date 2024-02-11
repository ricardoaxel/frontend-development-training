
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
   this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    console.info("root",root)
    // IF we don't have any node remaining in left/right (base case of nulls will return the last(first) floor)
    if(root === null) return 1
    let heightL =  isBalanced(root.left)
    let heightR = isBalanced(root.right)
    console.info("heights",heightL, heightR)

    // if(heightL === false || heightR === false) return false
   
    if(Math.abs(heightL - heightR) > 1) return false
    if(heightL || heightR ){
        return Math.max(heightL, heightR) + 1
    }else{
        return false
    }
   



};

let binaryTree = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left:{
            val: 15,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}

let binaryTree2 = {
    val: null,
    left: null,
    right: null,
}


let binaryTree3 = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: {
                val: 4,
                left: null,
                right: null,
            },
            right: null,
        },
        right: null
    },
    right: {
        val: 2,
        left: null,
        right: {
            val: 3,
            left: null,
            right: {
                val: 4,
                left: null,
                right: null
            }
        }
    }
}

let binaryTree4 = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null,
        },
        right: null
    },
    right: {
        val: 2,
        left: null,
        right: {
            val: 3,
            left: null,
            right: null,
        }
    }
}

console.log(isBalanced(binaryTree3))