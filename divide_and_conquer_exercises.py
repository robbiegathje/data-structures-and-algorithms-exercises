from math import floor

def countZeroes(arr):
    """
    Given an array of 1s and 0s which has all 1s first followed by all 0s,
    write a function called countZeroes, which returns the number of zeroes in the array.
    """
    leftIdx = 0
    rightIdx = len(arr) - 1
    while leftIdx <= rightIdx:
        middleIdx = floor((rightIdx + leftIdx) / 2)
        if arr[middleIdx] == 0:
            rightIdx = middleIdx - 1
        elif arr[middleIdx] == 1:
            leftIdx = middleIdx + 1
    return len(arr) - leftIdx
