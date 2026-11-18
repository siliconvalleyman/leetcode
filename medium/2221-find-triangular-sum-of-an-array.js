/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
    for (let length = nums.length; length > 1; length--) {
        // Build the next row in place from left to right.
        for (let i = 0; i < length - 1; i++) {
            nums[i] = (nums[i] + nums[i + 1]) % 10;
        }
    }

    return nums[0];
};