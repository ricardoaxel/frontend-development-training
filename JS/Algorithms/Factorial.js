// A aproach

function factorialA(n){
    let factorialResult = 1;
    for(let i=2; i<=n;i++){
        factorialResult = factorialResult * i;
    }
    return factorialResult
}

// B aproach
function factorialB(n){
    let factorialResult = 1

    for(let i=n;i>=1;i--){
        factorialResult *=i
    }
    return factorialResult

}
console.info(factorialB(4)) // 24
console.info(factorialB(5)) // 24