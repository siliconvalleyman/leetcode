/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    const first = strs[0];

    for (let i = 0; i < first.length; i++) {
        // Compare the current character across all remaining strings.
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== first[i]) {
                return first.slice(0, i);
            }
        }
    }

    return first;
};