// Write a function called averagePair.
// Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where
// the average of the pair equals the target average.
// There may be more than one pair that matches the average target.
function averagePair(integers, targetAverage) {
	let leftIndex = 0;
	let rightIndex = integers.length - 1;
	while (leftIndex < rightIndex) {
		let average = (integers[leftIndex] + integers[rightIndex]) / 2;
		if (average === targetAverage) {
			return true;
		} else if (average < targetAverage) {
			leftIndex++;
		} else if (average > targetAverage) {
			rightIndex--;
		}
	}
	return false;
}
