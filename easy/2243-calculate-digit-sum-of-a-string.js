/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
    while (s.length > k) {
        const groups = [];

        for (let start = 0; start < s.length; start += k) {
            let sum = 0;
            const end = Math.min(start + k, s.length);

            // Sum the digits in the current group.
            for (let i = start; i < end; i++) {
                sum += s.charCodeAt(i) - 48;
            }

            groups.push(String(sum));
        }

        // Build the string for the next round.
        s = groups.join("");
    }

    return s;
};