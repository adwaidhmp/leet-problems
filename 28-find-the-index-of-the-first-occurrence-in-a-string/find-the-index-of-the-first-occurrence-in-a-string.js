/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    let c = needle.length;

    for (let i = 0; i <= haystack.length - c; i++) {
        let b = haystack.slice(i, i + c);
        if (b === needle) {
            return i;
        }
    }

    return -1;
};
