
//  Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let actual = new ListNode();
    let dummyList = actual;

    while(l1 && l2){
        if(l1.val <= l2.val){
            actual.next = l1;
            l1 = l1.next
        }else{
            actual.next = l2; 
            l2 = l2.next
        }
        actual = actual.next;
    }

    if(l1 !== null ) actual.next = l1;
    if(l2 !== null ) actual.next = l2;
    
    return dummyList.next
};
let list1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    }
}

let list2 = {
    val: -1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null
        }
    }
}

console.info(JSON.stringify(mergeTwoLists(list1,list2)))