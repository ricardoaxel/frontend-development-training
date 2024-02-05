/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let newS = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    for(let i=0; i<newS.length/2; i++){
        if(newS[i] !== newS[newS.length-1-i]){
            return false
        }
    }
    return true
};


var isPalindrome2 = function(s) {
	s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
	let s2 = s;
	s = s.split('').reverse().join('');

	return s === s2 ? true : false;
};

