/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Stack to store opening brackets
    const stack = [];
    
    // Mapping for the brackets
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    // Iterate through each character in the string
    for (let char of s) {
        // If it’s an opening bracket, push to stack
        if (map[char]) {
            stack.push(char);
        } else {
            // If it’s a closing bracket, check if it matches the last opened bracket
            const last = stack.pop();
            if (map[last] !== char) {
                return false;  // Mismatch found
            }
        }
    }

    // If stack is empty, all brackets were matched properly
    return stack.length === 0;
};

module.exports = { isValid };
