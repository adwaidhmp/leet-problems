/**
 * @param {number[]} nums
 * @return {number}
 */


var removeDuplicates = function(nums) {
    let a = [];

    if (nums.length === 0) return 0;

    a.push(nums[0]); 

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            a.push(nums[i]);
        }
    }

    
    for (let i = 0; i < a.length; i++) {
        nums[i] = a[i];
    }

    return a.length;
};
