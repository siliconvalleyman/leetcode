class Solution:
    def reverse(self, x: int) -> int:
        # Determine the sign of the input.
        sign = -1 if x < 0 else 1
        x = abs(x)

        # Set the 32-bit integer limit.
        limit = 2 ** 31 - 1 if sign == 1 else 2 ** 31

        reversed_num = 0

        while x > 0:
            # Extract the last digit.
            digit = x % 10
            x //= 10

            # Check for overflow before updating.
            if reversed_num > limit // 10:
                return 0

            if reversed_num == limit // 10 and digit > limit % 10:
                return 0

            # Append the digit to the reversed number.
            reversed_num = reversed_num * 10 + digit

        # Restore the original sign.
        return sign * reversed_num
