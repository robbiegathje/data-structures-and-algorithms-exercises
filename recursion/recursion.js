/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
	if (idx === nums.length) return 1;

	return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0) {
	if (idx === words.length) return 0;
	const comparison = longest(words, idx + 1);
	return words[idx].length > comparison ? words[idx].length : comparison;
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0) {
	if (idx >= str.length) return '';

	return str[idx] + everyOther(str, idx + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
	const left = idx;
	const right = str.length - 1 - idx;

	if (left >= right) return true;
	if (str[left] !== str[right]) return false;
	return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
	if (idx === arr.length) return -1;
	if (arr[idx] === val) return idx;
	return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = str.length - 1) {
	if (idx < 0) return '';

	return str[idx] + revString(str, idx - 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(
	obj,
	values = Object.values(obj),
	strings = [],
	idx = 0
) {
	if (idx === values.length) return strings;
	if (typeof values[idx] === 'object')
		gatherStrings(values[idx], Object.values(values[idx]), strings);
	if (typeof values[idx] === 'string') strings.push(values[idx]);
	return gatherStrings(obj, values, strings, idx + 1);
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {}

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch,
};
