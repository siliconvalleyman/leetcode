/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let bestStart = 0;
    let bestLength = 0;

    function expandFromCenter(left, right) {
        // Expand while the characters on both sides match.
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }

        // The matching substring lies between the final boundaries.
        const length = right - left - 1;

        if (length > bestLength) {
            bestStart = left + 1;
            bestLength = length;
        }
    }

    for (let i = 0; i < s.length; i++) {
        // Check odd-length and even-length palindromes.
        expandFromCenter(i, i);
        expandFromCenter(i, i + 1);
    }

    return s.slice(bestStart, bestStart + bestLength);
};