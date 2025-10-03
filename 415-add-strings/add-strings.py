class Solution(object):
    def addStrings(self, num1, num2):
        """
        :type num1: str
        :type num2: str
        :rtype: str
        """
        i, j = len(num1) - 1, len(num2) - 1  # start from rightmost digits
        carry = 0
        result = []

        while i >= 0 or j >= 0 or carry:
            x1 = ord(num1[i]) - ord('0') if i >= 0 else 0  # convert char -> digit
            x2 = ord(num2[j]) - ord('0') if j >= 0 else 0

            total = x1 + x2 + carry
            result.append(str(total % 10))   # store last digit
            carry = total // 10              # carry for next round

            i -= 1
            j -= 1

        return ''.join(reversed(result))
