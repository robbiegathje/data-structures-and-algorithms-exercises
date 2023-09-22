/** TreeNode: node for a general tree. */

class TreeNode {
	constructor(val, children = []) {
		this.val = val;
		this.children = children;
	}
}

class Tree {
	constructor(root = null) {
		this.root = root;
	}

	/** sumValues(): add up all of the values in the tree. */

	sumValues() {
		let toVisitStack = [this.root];
		let sum = 0;

		while (this.root && toVisitStack.length > 0) {
			let current = toVisitStack.pop();

			sum += current.val;

			for (let child of current.children) {
				toVisitStack.push(child);
			}
		}
		return sum;
	}

	/** countEvens(): count all of the nodes in the tree with even values. */

	countEvens() {
		let toVisitStack = [this.root];
		let evensCount = 0;

		while (this.root && toVisitStack.length > 0) {
			let current = toVisitStack.pop();

			if (current.val % 2 === 0) {
				evensCount++;
			}

			for (let child of current.children) {
				toVisitStack.push(child);
			}
		}
		return evensCount;
	}

	/** numGreater(lowerBound): return a count of the number of nodes
	 * whose value is greater than lowerBound. */

	numGreater(lowerBound) {
		let toVisitStack = [this.root];
		let numsGreater = 0;

		while (this.root && toVisitStack.length > 0) {
			let current = toVisitStack.pop();

			if (current.val > lowerBound) {
				numsGreater++;
			}

			for (let child of current.children) {
				toVisitStack.push(child);
			}
		}
		return numsGreater;
	}
}

module.exports = { Tree, TreeNode };
