class Solution(object):
    def firstUniqChar(self, s):
        # Step 1: Count occurrences of each character
        count = {}
        for ch in s:
            count[ch] = count.get(ch, 0) + 1
        
        # Step 2: Find the first character with count 1
        for i, ch in enumerate(s):
            if count[ch] == 1:
                return i
        
        # Step 3: If none found, return -1
        return -1


        