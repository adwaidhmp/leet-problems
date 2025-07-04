/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = "";

    while (i >= 0 || j >= 0 || carry > 0) {
        let sum = carry;
        if (i >= 0) sum += parseInt(a[i--]); // add digit from a
        if (j >= 0) sum += parseInt(b[j--]); // add digit from b

        result = (sum % 2) + result;         // add binary digit
        carry = Math.floor(sum / 2);         // update carry
    }

    return result;
};
