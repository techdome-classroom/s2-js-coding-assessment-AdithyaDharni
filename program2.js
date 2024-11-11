/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    // Map of Roman numeral values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        // Get the value of the current and next characters
        const current = romanMap[s[i]];
        const next = romanMap[s[i + 1]];

        // If the current value is less than the next, subtract it; otherwise, add it
        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
}

module.exports = { romanToInt };
