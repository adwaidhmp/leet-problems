/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += 1;
        if (digits[i] < 10) {
            return digits; // No carry, done
        }
        digits[i] = 0; // Carry over
    }
    digits.unshift(1); // Handle case like [9,9,9]
    return digits;
};
