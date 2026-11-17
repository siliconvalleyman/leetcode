/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const m = s.length;
    const n = p.length;

    // dp[i][j] indicates whether s[0..i) matches p[0..j).
    const dp = Array.from(
        { length: m + 1 },
        () => Array(n + 1).fill(false)
    );

    dp[0][0] = true;

    // Patterns such as "a*b*" can match an empty string.
    for (let j = 2; j <= n; j++) {
        if (p[j - 1] === "*") {
            dp[0][j] = dp[0][j - 2];
        }
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === "*") {
                // Match zero occurrences of the preceding element.
                dp[i][j] = dp[i][j - 2];

                const matches =
                    p[j - 2] === "." || p[j - 2] === s[i - 1];

                // Consume one character while keeping the starred element.
                if (matches) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            } else if (
                p[j - 1] === "." || p[j - 1] === s[i - 1]
            ) {
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }

    return dp[m][n];
};