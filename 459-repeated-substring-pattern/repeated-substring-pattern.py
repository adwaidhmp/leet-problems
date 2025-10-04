class Solution(object):
    def repeatedSubstringPattern(self, s):
        m = s[ 1 : ] + s[ : -1 ]
        return s in m
