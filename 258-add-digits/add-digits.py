class Solution(object):
    def addDigits(self, num):
        a = str(num)
        c = 0
        if len(a) > 1:   
            for i in a:
                c = c + int(i)
            return self.addDigits(c)   
        else:
            return int(a)   
