function fib (n){
    const fibArr = [0,1]
    for(let i=2;i<n; i++){
        fibArr.push(fibArr[i-1]+fibArr[i-2])
    }
    return fibArr
}

console.info(fib(2)) // [0,1]
console.info(fib(3)) // [0,1,1]
console.info(fib(5)) // [0,1,1,2,3,5,8]