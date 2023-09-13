// Write a function called constructNote, which accepts two strings, a message and some letters.
// The function should return true if the message can be built with the letters that you are given;
// otherwise, it should return false.
// Assume that there are only lowercase letters
// and no spaces or special characters in both the message and the letters.
function constructNote(message, availableLetters) {
	let availableLettersCount = {};
	for (let letter of availableLetters) {
		availableLettersCount[letter] = availableLettersCount[letter]
			? availableLettersCount[letter] + 1
			: 1;
	}
	for (let character of message) {
		if (
			!availableLettersCount[character] ||
			availableLettersCount[character] === 0
		) {
			return false;
		} else {
			availableLettersCount[character]--;
		}
	}
	return true;
}
