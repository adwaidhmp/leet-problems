/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    let b = s.split(" "); 
    let d=b.length-1
    return b[d].length; 
};