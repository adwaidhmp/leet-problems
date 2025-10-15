class Solution(object):
    def moveZeroes(self, nums):
        i = 0
        n = len(nums)
        while i < n:
            if nums[i] == 0:
                nums.append(nums.pop(i))
                n -= 1  
            else:
                i += 1

