function merge(nums, comparison) {
	let numsPointer = 0;
	let comparisonPointer = 0;
	let output = [];

	while (numsPointer < nums.length && comparisonPointer < comparison.length) {
		if (nums[numsPointer] < comparison[comparisonPointer]) {
			output.push(nums[numsPointer]);
			numsPointer++;
		} else {
			output.push(comparison[comparisonPointer]);
			comparisonPointer++;
		}
	}

	while (numsPointer < nums.length) {
		output.push(nums[numsPointer]);
		numsPointer++;
	}
	while (comparisonPointer < comparison.length) {
		output.push(comparison[comparisonPointer]);
		comparisonPointer++;
	}

	return output;
}

// the below code for mergeSort is taken from Springboard's solution; however, I am now fully aware how this code works together and better equipped to write recursive sorting algorithms in the future.
function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	const mid = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, mid));
	const right = mergeSort(arr.slice(mid));

	return merge(left, right);
}

module.exports = { merge, mergeSort };
