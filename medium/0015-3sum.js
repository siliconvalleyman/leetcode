/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);

    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip repeated first values to avoid duplicate triplets.
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        // All remaining values are positive, so their sum cannot be zero.
        if (nums[i] > 0) {
            break;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                // Skip repeated values after recording a valid triplet.
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }

                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            }
        }
    }

    return result;
};