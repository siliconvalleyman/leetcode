/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const seen = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Check whether the complementary value appeared earlier.
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }

        // Store the current value after checking to avoid reusing its index.
        seen.set(nums[i], i);
    }
};