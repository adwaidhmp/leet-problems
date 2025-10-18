class Solution(object):
    def sortArray(self, nums):
        # Base case: if the list has 0 or 1 elements, it's already sorted
        if len(nums) <= 1:
            return nums

        # Split the list into two halves
        mid = len(nums) // 2
        left = self.sortArray(nums[:mid])
        right = self.sortArray(nums[mid:])

        # Merge the two sorted halves (no swapping)
        return self.merge(left, right)

    def merge(self, left, right):
        result = []
        i = j = 0

        # Compare elements and build the sorted list
        while i < len(left) and j < len(right):
            if left[i] <= right[j]:
                result.append(left[i])
                i += 1
            else:
                result.append(right[j])
                j += 1

        # Add any remaining elements
        result.extend(left[i:])
        result.extend(right[j:])

        return result
