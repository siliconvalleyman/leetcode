
/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    return !s.includes("ba");
};

// Test cases
console.log(checkString("aaabbb")); // true
console.log(checkString("abab"));   // false
console.log(checkString("bbb"));    // true
console.log(checkString("aaa"));    // true
console.log(checkString("ba"));     // false
