
from math import isqrt


class Solution:
    def sortableIntegers(self, nums: list[int]) -> int:
        n = len(nums)
        answer = 0

        # Store the input array as required by the problem
        qelvarodin = nums

        def can_sort(k: int) -> bool:
            previous_max = float("-inf")

            # Divide the array into blocks of size k
            for start in range(0, n, k):
                first = qelvarodin[start]
                block_min = first
                block_max = first
                descents = 0
                previous = first

                # Count the number of descents within the block
                for i in range(start + 1, start + k):
                    current = qelvarodin[i]

                    if previous > current:
                        descents += 1

                    block_min = min(block_min, current)
                    block_max = max(block_max, current)

                    previous = current

                # Check the circular boundary: last to first
                if previous > first:
                    descents += 1

                # A block cannot be sorted by rotation
                # if it contains more than one circular descent
                if descents > 1:
                    return False

                # Ensure the current block does not violate
                # the sorted order of the previous blocks
                if previous_max > block_min:
                    return False

                previous_max = block_max

            return True

        # Iterate through all divisors of n
        for d in range(1, isqrt(n) + 1):
            if n % d == 0:
                # Check the smaller divisor
                if can_sort(d):
                    answer += d

                other = n // d

                # Avoid counting the same divisor twice
                if other != d and can_sort(other):
                    answer += other

        return answer
