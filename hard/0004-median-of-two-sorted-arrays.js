/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // Binary-search the shorter array.
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;
    const leftSize = Math.floor((m + n + 1) / 2);
    let low = 0;
    let high = m;

    while (low <= high) {
        const cut1 = Math.floor((low + high) / 2);
        const cut2 = leftSize - cut1;

        // Use infinities when a partition has no element on one side.
        const left1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1];
        const right1 = cut1 === m ? Infinity : nums1[cut1];
        const left2 = cut2 === 0 ? -Infinity : nums2[cut2 - 1];
        const right2 = cut2 === n ? Infinity : nums2[cut2];

        if (left1 > right2) {
            high = cut1 - 1;
        } else if (left2 > right1) {
            low = cut1 + 1;
        } else {
            const maxLeft = Math.max(left1, left2);

            // For an odd total, the left half holds the middle element.
            if ((m + n) % 2 === 1) {
                return maxLeft;
            }

            const minRight = Math.min(right1, right2);
            return (maxLeft + minRight) / 2;
        }
    }
};