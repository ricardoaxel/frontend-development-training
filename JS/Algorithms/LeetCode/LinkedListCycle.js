/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
     this.val = val;
     this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head
    let fast = head

    while (slow !== null && fast !== null) {
        slow = slow.next
        if (fast.next === null) return false
        fast = fast.next.next
        if (slow === fast) return true
    }

    return false
};

let linkedList = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            left: null,
            right: null,
        },
        right: null
    },
}
co