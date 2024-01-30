// Arrays vs O(n)
// let list  = [3, 4, 2, 7]
// let index = 3

// for(let i = list.length; i >= index; i --){
//     console.info(list[i], list[i-1])
//     list[i] = list[i - 1]
//     console.info(list)
// }
// list[index] = 9

// console.log(list) 

// Linked Lists  O(1)


let list = {
    val: 3,
    next: {
        val: 4,
        next: {
            val: 2,
            next: {
                val: 7,
                next: null
            }
        }
    }
}

let _list = list.next.next

list.next.next.val  = 100
list.next.next.next = _list

console.log(list.next)
// {val: 3, next: {val: 9, next: {... }}}


