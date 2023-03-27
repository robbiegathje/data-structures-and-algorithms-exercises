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

def sortedFrequency(arr, target):
    """
    Given a sorted array and a number, write a function called sortedFrequency
    that counts the occurrences of the number in the array.
    """
    leftIdx = findFirstIndex(arr, target)
    rightIdx = findLastIndex(arr, target)
    if leftIdx == -1 or rightIdx == -1:
        return -1
    return rightIdx - leftIdx + 1

def findFirstIndex(arr, target):
    leftIdx = 0
    rightIdx = len(arr) - 1
    while leftIdx <= rightIdx:
        middleIdx = floor((rightIdx + leftIdx) / 2)
        if arr[middleIdx] >= target:
            rightIdx = middleIdx - 1
        elif arr[middleIdx] < target:
            leftIdx = middleIdx + 1
    return leftIdx if leftIdx < len(arr) and arr[leftIdx] == target else -1

def findLastIndex(arr, target):
    leftIdx = 0
    rightIdx = len(arr) - 1
    while leftIdx <= rightIdx:
        middleIdx = floor((rightIdx + leftIdx) / 2)
        if arr[middleIdx] <= target:
            leftIdx = middleIdx + 1
        elif arr[middleIdx] > target:
            rightIdx = middleIdx - 1
    return rightIdx if rightIdx >= 0 and arr[rightIdx] == target else -1
