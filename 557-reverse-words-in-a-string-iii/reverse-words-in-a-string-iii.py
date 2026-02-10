class Solution:
    def reverseWords(self, s: str) -> str:
        b= s.split(" ")
        d=[]
        for i in b:
            d.append(i[::-1])
        c=(" ").join(d)
        return c