
class Solution:
    def minOperations(self, s: str) -> int:
        n = len(s)

        # Check if the string is already sorted
        if all(s[i] <= s[i + 1] for i in range(n - 1)):
            return 0

        # An unsorted string of length 2 cannot be sorted
        if n == 2:
            return -1

        # Find the minimum and maximum characters
        min_char = min(s)
        max_char = max(s)

        # One operation is enough if an extreme is in place
        if s[0] == min_char or s[-1] == max_char:
            return 1

        # Two operations if an extreme is in the middle
        for i in range(1, n - 1):
            if s[i] == min_char or s[i] == max_char:
                return 2

        # Otherwise, three operations are required
        return 3
