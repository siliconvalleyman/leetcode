/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestUniqueSubarray = function (nums) {
    const n = nums.length;

    // Initialize the suffix automaton.
    const states = [
        {
            len: 0,
            link: -1,
            next: new Map(),
            count: 0
        }
    ];

    let last = 0;

    // Build the suffix automaton.
    for (const num of nums) {
        const cur = states.length;

        states.push({
            len: states[last].len + 1,
            link: 0,
            next: new Map(),
            count: 1
        });

        let p = last;

        while (p !== -1 && !states[p].next.has(num)) {
            states[p].next.set(num, cur);
            p = states[p].link;
        }

        if (p === -1) {
            states[cur].link = 0;
        } else {
            const q = states[p].next.get(num);

            if (states[p].len + 1 === states[q].len) {
                states[cur].link = q;
            } else {
                const clone = states.length;

                states.push({
                    len: states[p].len + 1,
                    link: states[q].link,
                    next: new Map(states[q].next),
                    count: 0
                });

                while (
                    p !== -1 &&
                    states[p].next.get(num) === q
                    ) {
                    states[p].next.set(num, clone);
                    p = states[p].link;
                }

                states[q].link = clone;
                states[cur].link = clone;
            }
        }

        last = cur;
    }

    // Sort states by length using counting sort.
    const buckets = new Int32Array(n + 1);
    const order = new Int32Array(states.length);

    for (const state of states) {
        buckets[state.len]++;
    }

    for (let i = 1; i <= n; i++) {
        buckets[i] += buckets[i - 1];
    }

    for (let i = states.length - 1; i >= 0; i--) {
        order[--buckets[states[i].len]] = i;
    }

    // Propagate occurrence counts through suffix links.
    for (let i = order.length - 1; i > 0; i--) {
        const v = order[i];
        const parent = states[v].link;

        states[parent].count += states[v].count;
    }

    // Find the shortest subarray occurring exactly once.
    let result = n;

    for (let i = 1; i < states.length; i++) {
        if (states[i].count === 1) {
            const minLength =
                states[states[i].link].len + 1;

            result = Math.min(result, minLength);
        }
    }

    return result;
};