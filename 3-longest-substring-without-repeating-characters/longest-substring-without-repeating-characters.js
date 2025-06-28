/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let start = 0;
    let maxLength = 0;
    let seen = {}; // store last seen position of characters

    for (let i = 0; i < s.length; i++) {
        let char = s[i];


        if (seen[char] !== undefined && seen[char] >= start) {
            start = seen[char] + 1; 
        }

        seen[char] = i; 
        let length = i - start + 1;

        if (length > maxLength) {
            maxLength = length;
        }
    }

    return maxLength;
}
