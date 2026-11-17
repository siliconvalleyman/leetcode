/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumChanges = function (s, k) {
    const n = s.length;
    const divisors = Array.from({ length: n + 1 }, () => []);

    // Collect all proper divisors for each substring length.
    for (let d = 1; d * 2 <= n; d++) {
        for (let length = d * 2; length <= n; length += d) {
            divisors[length].push(d);
        }
    }

    // cost[start][end] is the minimum cost for s[start..end).
    const cost = Array.from({ length: n }, () =>
        Array(n + 1).fill(Infinity)
    );

    for (let start = 0; start < n; start++) {
        for (let end = start + 2; end <= n; end++) {
            const length = end - start;

            for (const d of divisors[length]) {
                let changes = 0;

                // Each mismatched pair needs exactly one replacement.
                for (let offset = 0; offset < d; offset++) {
                    let left = start + offset;
                    let right = end - d + offset;

                    while (left < right) {
                        if (s[left] !== s[right]) {
                            changes++;
                        }

                        left += d;
                        right -= d;
                    }
                }

                cost[start][end] = Math.min(cost[start][end], changes);
            }
        }
    }

    // previous[end] is the best cost for the prefix s[0..end).
    let previous = Array(n + 1).fill(Infinity);
    previous[0] = 0;

    for (let parts = 1; parts <= k; parts++) {
        const current = Array(n + 1).fill(Infinity);

        for (let end = 2 * parts; end <= n; end++) {
            // Leave at least two characters in every part.
            for (let start = 2 * (parts - 1); start <= end - 2; start++) {
                current[end] = Math.min(
                    current[end],
                    previous[start] + cost[start][end]
                );
            }
        }

        previous = current;
    }

    return previous[n];
};