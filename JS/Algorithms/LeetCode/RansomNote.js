var canConstruct = function(ransomNote, magazine) {
    let charactersMap = new Map();

    for(let i=0;i <= magazine.length; i++){
        if(charactersMap.get(magazine[i])){
            charactersMap.set(charactersMap.get(magazine[i])+1)
        }else{
            charactersMap.set(magazine[i],1)
        }
    }
    console.log(charactersMap)

    for(let j=0; j <= ransomNote.length; j++){
        if(charactersMap.get(ransomNote[j])){
            charactersMap.set(charactersMap.get(ransomNote[j])-1)
        }else{
            return false
        }
    }
    console.log(charactersMap)
    return true
};

console.log(canConstruct(["a","a"], ["a", "b"]))