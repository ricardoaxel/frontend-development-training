function cuadradoPromise(value){
    if(typeof value !== "number"){
        return Promise.reject("Errorasa")
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value*value
            })
        }, 0 | Math.random() * 1000)
    })
}


/* cuadradoPromise(0)
    .then(obj=> {
        console.log("resolved with", obj)
        return cuadradoPromise(1)
    })
    .then(obj => {
        console.log("resolved 2 with", obj)
        return cuadradoPromise(2)
    })
    .catch(); */

async function declaredAsyncFunction() {
    try{
        console.log("Async await start")
        let obj = await cuadradoPromise(1)
        console.log(obj)
        console.log("Async await middle")
        let obj2 = await cuadradoPromise("2")
        console.log(obj2)
    }
    catch(err){
        console.error(err)
    }
}
console.log("Before async func")
declaredAsyncFunction()
console.log("After async func")