/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // Reject negative numbers and nonzero numbers ending in zero.
    if (x < 0 || (x !== 0 && x % 10 === 0)) {
        return false;
    }

    let reversedHalf = 0;

    // Move digits from the end until the two halves meet or cross.
    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + (x % 10);
        x = Math.trunc(x / 10);
    }

    // Drop the middle digit when the number has an odd digit count.
    return x === reversedHalf || x === Math.trunc(reversedHalf / 10);
};