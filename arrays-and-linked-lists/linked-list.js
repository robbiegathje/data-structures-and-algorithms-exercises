/** Node: node for a singly linked list. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** LinkedList: chained together nodes. */

class LinkedList {
	constructor(vals = []) {
		this.head = null;
		this.tail = null;
		this.length = 0;

		for (let val of vals) this.push(val);
	}

	/** push(val): add new value to end of list. */

	push(val) {
		const node = new Node(val);
		if (this.length === 0) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		this.length++;
	}

	/** unshift(val): add new value to start of list. */

	unshift(val) {
		const node = new Node(val);
		if (this.length === 0) {
			this.head = node;
			this.tail = node;
		} else {
			node.next = this.head;
			this.head = node;
		}
		this.length++;
	}

	/** pop(): return & remove last item. */

	pop() {
		const output = this.tail.val;
		if (this.length === 0) {
			throw Error('LinkedList is empty.');
		} else if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			let index = 0;
			let currentNode = this.head;
			while (index < this.length - 2) {
				currentNode = currentNode.next;
				index++;
			}
			currentNode.next = null;
			this.tail = currentNode;
		}
		this.length--;
		return output;
	}

	/** shift(): return & remove first item. */

	shift() {
		const output = this.head.val;
		if (this.length === 0) {
			throw Error('LinkedList is empty.');
		} else if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.next;
		}
		this.length--;
		return output;
	}

	/** getAt(idx): get val at idx. */

	getAt(idx) {
		if (idx >= this.length) {
			throw Error('Index not found in LinkedList.');
		}
		let currentIndex = 0;
		let currentNode = this.head;
		while (currentIndex < idx) {
			currentNode = currentNode.next;
			currentIndex++;
		}
		return currentNode.val;
	}

	/** setAt(idx, val): set val at idx to val */

	setAt(idx, val) {
		if (idx >= this.length) {
			throw Error('Index not found in LinkedList.');
		}
		let currentIndex = 0;
		let currentNode = this.head;
		while (currentIndex < idx) {
			currentNode = currentNode.next;
			currentIndex++;
		}
		currentNode.val = val;
		return currentNode.val;
	}

	/** insertAt(idx, val): add node w/val before idx. */

	insertAt(idx, val) {
		if (idx > this.length) {
			throw Error('Index not found in LinkedList.');
		}
		const node = new Node(val);
		if (this.length === 0 && idx === 0) {
			this.head = node;
			this.tail = node;
		} else {
			let currentIndex = 0;
			let currentNode = this.head;
			while (currentIndex < idx - 1) {
				currentNode = currentNode.next;
				currentIndex++;
			}
			node.next = currentNode.next;
			currentNode.next = node;
			if (idx === this.length) {
				this.tail = node;
			}
		}
		this.length++;
	}

	/** removeAt(idx): return & remove item at idx, */

	removeAt(idx) {
		let output;
		if (idx >= this.length) {
			throw Error('Index not found in LinkedList.');
		} else if (idx === 0) {
			output = this.head.val;
			this.head = this.head.next;
			if (this.length === 1) {
				this.tail = null;
			}
		} else {
			let currentIndex = 0;
			let currentNode = this.head;
			while (currentIndex < idx - 1) {
				currentNode = currentNode.next;
				currentIndex++;
			}
			output = currentNode.next.val;
			currentNode.next = currentNode.next.next;
			if (currentNode.next === null) {
				this.tail = currentNode;
			}
		}
		this.length--;
		return output;
	}

	/** average(): return an average of all values in the list */

	average() {
		if (this.length === 0) {
			return 0;
		}
		let sum = 0;
		let currentIndex = 0;
		let currentNode = this.head;
		while (currentIndex < this.length) {
			sum += currentNode.val;
			currentNode = currentNode.next;
			currentIndex++;
		}
		return sum / this.length;
	}
}

module.exports = LinkedList;
