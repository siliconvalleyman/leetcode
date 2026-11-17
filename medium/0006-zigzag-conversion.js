/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    // The characters stay in order if no turn is needed.
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    const rows = Array.from({ length: numRows }, () => []);
    let row = 0;
    let direction = 1;

    for (let i = 0; i < s.length; i++) {
        rows[row].push(s[i]);

        // Change direction at the first and last rows.
        if (row === 0) {
            direction = 1;
        } else if (row === numRows - 1) {
            direction = -1;
        }

        row += direction;
    }

    return rows.map((characters) => characters.join("")).join("");
};