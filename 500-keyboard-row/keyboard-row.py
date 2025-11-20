class Solution(object):
    def findWords(self, words):
        """
        :type words: List[str]
        :rtype: List[str]
        """
        a="qwertyuiop"
        b="asdfghjkl"
        c="zxcvbnm"
        result=[]
        for i in words:
            low = i.lower()
            if all(ch in a for ch in low):
                result.append(i)
            elif all(ch in b for ch in low):
                result.append(i)
            elif all(ch in c for ch in low):
                result.append(i)
        return result
        