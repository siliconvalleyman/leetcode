/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    const min = -(2 ** 31);
    const max = 2 ** 31 - 1;
    let index = 0;

    // Skip leading spaces and read at most one sign.
    while (s[index] === " ") {
        index++;
    }

    let sign = 1;
    if (s[index] === "+" || s[index] === "-") {
        sign = s[index] === "-" ? -1 : 1;
        index++;
    }

    const limit = sign === 1 ? max : -min;
    let value = 0;

    while (index < s.length) {
        const digit = s.charCodeAt(index) - 48;
        if (digit < 0 || digit > 9) {
            break;
        }

        // Clamp the result before appending a digit that would exceed the limit.
        if (value > Math.floor((limit - digit) / 10)) {
            return sign === 1 ? max : min;
        }

        value = value * 10 + digit;
        index++;
    }

    return value === 0 ? 0 : sign * value;
};