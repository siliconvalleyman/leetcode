/**
 * Calculates the minimum possible score (low + high) after changing
 * at most two elements in `nums`.
 *
 * @param {number[]} nums
 * @return {number}
 */
function minimizeSum(nums) {
    const n = nums.length;

    // With at most 2 changes, we can always make all elements equal (score = 0)
    if (n <= 3) {
        return 0;
    }

    // Sort ascending so extreme values sit at the boundaries
    nums.sort((a, b) => a - b);

    // Low score can always be reduced to 0 by matching an existing value,
    // leaving only the high score (max - min) to minimize.
    const changeTwoSmallest = nums[n - 1] - nums[2];
    const changeTwoLargest = nums[n - 3] - nums[0];
    const changeOneEachEnd = nums[n - 2] - nums[1];

    return Math.min(changeTwoSmallest, changeTwoLargest, changeOneEachEnd);
}