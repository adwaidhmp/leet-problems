/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) {
            return true; // duplicate found
        }
        seen.add(num);
    }
    return false; // no duplicates
};

