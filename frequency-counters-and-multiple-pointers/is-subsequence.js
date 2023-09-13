// Write a function called isSubsequence which takes in two strings
// and checks whether the characters in the first string
// form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string
// appear somewhere in the second string, without their order changing.
function isSubsequence(substring, string) {
	let substringIndex = 0;
	let stringIndex = 0;
	while (stringIndex < string.length) {
		if (string[stringIndex] === substring[substringIndex]) {
			substringIndex++;
			stringIndex++;
			if (substringIndex === substring.length) {
				return true;
			}
		} else if (string[stringIndex] !== substring[substringIndex]) {
			stringIndex++;
		}
	}
	return false;
}
