// Write a function called separatePositive which accepts an array of non-zero integers.
// Separate the positive integers to the left and the negative integers to the right.
// The positive numbers and negative numbers need not be in sorted order.
// The problem should be done in place (in other words, do not build a copy of the input array).
function separatePositive(integers) {
	let positiveIndex = 0;
	let negativeIndex = integers.length - 1;
	while (positiveIndex < negativeIndex) {
		if (integers[positiveIndex] > 0) {
			positiveIndex++;
		} else if (integers[positiveIndex] < 0) {
			integers.push(integers[positiveIndex]);
			integers.splice(positiveIndex, 1);
			negativeIndex--;
		}
	}
	return integers;
}
