/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let c = needle.length;
    if (c === 0) return 0;
    for (let i = 0; i <= haystack.length - c; i++) {
        let d = haystack.slice(i, i + c);
        if (needle === d) {
            return i;
        }
    }

    return -1;
};
