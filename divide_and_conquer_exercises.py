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

def findRotatedIndex(arr, target):
    """
    Write a function called findRotatedIndex
    which accepts a rotated array of sorted numbers and an integer.
    The function should return the index of num in the array. If the value is not found, return -1.
    """
    return 'something'

def findRotationCount(arr):
    """
    Write a function called findRotationCount which accepts an array of distinct numbers
    sorted in increasing order. The array has been rotated counter-clockwise n number of times.
    Given such an array, find the value of n.
    """
    leftIdx = 0
    rightIdx = len(arr) - 1
    while leftIdx < rightIdx:
        middleIdx = floor((rightIdx + leftIdx) / 2)
        if arr[middleIdx] > arr[rightIdx]:
            leftIdx = middleIdx + 1
        elif arr[middleIdx] < arr[rightIdx]:
            rightIdx = middleIdx
    return leftIdx

def findFloor(arr, target):
    """
    Write a function called findFloor which accepts a sorted array and a value x,
    and returns the floor of x in the array.
    The floor of x in an array is the largest element in the array which is smaller than
    or equal to x. If the floor does not exist, return -1.
    """
    if arr[0] > target:
        return -1
    leftIdx = 0
    rightIdx = len(arr) - 1
    while leftIdx < rightIdx:
        middleIdx = floor((rightIdx + leftIdx) / 2)
        if arr[middleIdx] == target:
            return arr[middleIdx]
        elif arr[middleIdx] > target:
            rightIdx = middleIdx - 1
        elif arr[middleIdx] < target:
            if arr[middleIdx + 1] < target:
                leftIdx = middleIdx + 1
            else:
                return arr[middleIdx]
    return arr[leftIdx]
