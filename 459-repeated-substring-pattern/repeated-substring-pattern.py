class Solution(object):
    def repeatedSubstringPattern(self, s):
        n = len(s)
        for i in range(1, n // 2 + 1):  
            if n % i == 0:              
                substring = s[:i]
                times = n // i
                if substring * times == s:
                    return True
        return False
