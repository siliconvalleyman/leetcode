/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let reversed = 0;

    while (x !== 0) {
        const digit = x % 10;
        x = Math.trunc(x / 10);

        // Check both 32-bit limits before appending the next digit.
        if (
            reversed > 214748364 ||
            (reversed === 214748364 && digit > 7) ||
            reversed < -214748364 ||
            (reversed === -214748364 && digit < -8)
        ) {
            return 0;
        }

        reversed = reversed * 10 + digit;
    }

    return reversed;
};