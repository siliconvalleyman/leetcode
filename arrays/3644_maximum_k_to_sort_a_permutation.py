
from typing import List

class Solution:
    def sortPermutation(self, nums: List[int]) -> int:
        # Initialize the bitwise AND identity.
        result = -1

        # Consider only elements that are out of place.
        for i, num in enumerate(nums):
            if num != i:
                result &= num

        # Return 0 if the permutation is already sorted.
        return max(result, 0)
