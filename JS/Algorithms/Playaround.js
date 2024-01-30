
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
var mergeTwoLists = function(l1, l2) {
    // console.info(l1, l2)
    const dummyList = new ListNode(-Infinity)
    let pointer = dummyList;

    while(l1 && l2){ 
        // console.info({dummy: JSON.stringify(dummyList), pointer:JSON.stringify(pointer)})
        console.info({L1: JSON.stringify(l1), L2: JSON.stringify(l2), pointer:JSON.stringify(pointer), dummy: JSON.stringify(dummyList)})
        if(l1.val <= l2.val){
           pointer.next = l1;
           pointer = l1;
           l1 = l1.next; 
        } else{
            pointer.next = l2;
            pointer = l2;
            l2 = l2.next;
        }
    }
    if(!l1) pointer.next = l2
    if(!l2) pointer.next = l1

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