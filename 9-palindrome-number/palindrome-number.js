/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString()
    let a=str.split('').reverse().join('');
    if (str===a){
        return true
    }
    else{
        return false
    }
};