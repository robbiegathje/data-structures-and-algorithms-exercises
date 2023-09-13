// Write a function called twoArrayObject which accepts two arrays of varying lengths.
// The first array consists of keys and the second one consists of values.
// Your function should return an object created from the keys and values.
// If there are not enough values, the rest of keys should have a value of null.
// If there not enough keys, just ignore the rest of values.
function twoArrayObject(keys, values) {
	let output = {};
	for (let i = 0; i < keys.length; i++) {
		output[keys[i]] = values[i] ? values[i] : null;
	}
	return output;
}
