/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    let compareDictionary = new Map();

    //Adds letters for first string
    for(let i=0;i<s.length;i++){
        if(compareDictionary.get(s[i])){
             compareDictionary.set(s[i], compareDictionary.get(s[i])+1)
        }
        else{
            compareDictionary.set(s[i], 1)
        }
    }
    //Removes letters for second string
    for(let i=0; i<t.length;i++){
        if(compareDictionary.get(t[i])){
            if(compareDictionary.get(t[i])-1 === 0){
                compareDictionary.delete(t[i])
            }else{
                compareDictionary.set(t[i], compareDictionary.get(t[i])-1)
            }
        }else{
            compareDictionary.set(t[i],1)
        }
    }
    return !compareDictionary.size

};

console.log(isAnagram("avass","vaas"))