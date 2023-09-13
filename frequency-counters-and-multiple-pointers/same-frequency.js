// Write a function called sameFrequency.
// Given two positive integers, find out if the two numbers have the same frequency of digits.
function sameFrequency(integer, comparison) {
	if (integer.toString().length !== comparison.toString().length) {
		return false;
	}
	let integerDigits = {};
	for (let digit of integer.toString()) {
		integerDigits[digit] = integerDigits[digit] ? integerDigits[digit] + 1 : 1;
	}
	for (let digit of comparison.toString()) {
		if (!integerDigits[digit] || integerDigits[digit] === 0) {
			return false;
		} else {
			integerDigits[digit]--;
		}
	}
	return true;
}
