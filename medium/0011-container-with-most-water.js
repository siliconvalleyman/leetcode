/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let bestArea = 0;

    while (left < right) {
        const width = right - left;
        const waterHeight = Math.min(height[left], height[right]);

        bestArea = Math.max(bestArea, width * waterHeight);

        // Move the shorter side to look for a taller boundary.
        if (height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return bestArea;
};