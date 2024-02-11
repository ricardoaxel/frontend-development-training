//const x = ' Fluffy'

// f function has acces to the x const outside it and inside
//const f = () => {
//    const y = "Mitsi"
//    console.info(x,y)
//}
//f();

/* require('isomorphic-fetch')

const crudder = domain => resource => {
    const url = `${domain}/${resource}`

    return ({
        create: (x) => fetch(url,{
            method: 'POST',
            body: JSON.stringify(x),
        }).then(x => JSON.parse(x)),
        get: () => fetch(url).then(x => x.json())
    })
}

const base = crudder("https://jsonplaceholder.typicode.com")
const todos = base('todos')

todos.get().then(response => console.log(response.slice(0,3))) 

*/

function duplicate(arr) {
    let pos = 0
    let finalLength = arr.length
    while(pos < finalLength ){
        arr[finalLength+pos] = arr[pos]
        pos = pos + 1
    }
    return arr 
  }

console.info(duplicate([1,2,3,4,5])); // [1,2,3,4,5,1,2,3,4,5]
