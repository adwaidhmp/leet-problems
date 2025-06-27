/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    function getValue(ch) {
        if (ch === 'I') return 1;
        else if (ch === 'V') return 5;
        else if (ch === 'X') return 10;
        else if (ch === 'L') return 50;
        else if (ch === 'C') return 100;
        else if (ch === 'D') return 500;
        else if (ch === 'M') return 1000;
        return 0;
    }

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let current = getValue(s[i]);
        let next = getValue(s[i + 1]);

        if (next > current) {
            total += (next - current);
            i++; 
        } else {
            total += current;
        }
    }

    return total;
};
