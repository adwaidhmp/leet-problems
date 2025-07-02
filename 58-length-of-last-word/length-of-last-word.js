/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    let b = s.split(" "); 
    return b[b.length - 1].length; 
};