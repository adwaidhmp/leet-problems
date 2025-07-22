/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let cleaned = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
};