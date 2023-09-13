// Given an array of integers, and a number,
// find the number of pairs of integers in the array whose sum is equal to the second parameter.
// You can assume that there will be no duplicate values in the array.
function countPairs(integers, sum) {
	let differences = {};
	let numberOfPairs = 0;
	for (let num of integers) {
		let difference = sum - num;
		if (differences[num]) {
			numberOfPairs++;
		}
		differences[difference] = true;
	}
	return numberOfPairs;
}
