class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinarySearchTree {
	constructor(root = null) {
		this.root = root;
	}

	/** insert(val): insert a new node into the BST with value val.
	 * Returns the tree. Uses iteration. */

	insert(val) {
		const newNode = new Node(val);
		if (this.root === null) {
			this.root = newNode;
			return this;
		}
		let current = this.root;
		while (current) {
			if (val < current.val) {
				if (current.left) {
					current = current.left;
				} else {
					current.left = newNode;
					return this;
				}
			} else if (val > current.val) {
				if (current.right) {
					current = current.right;
				} else {
					current.right = newNode;
					return this;
				}
			}
		}
	}

	/** insertRecursively(val): insert a new node into the BST with value val.
	 * Returns the tree. Uses recursion. */

	insertRecursively(val, current = this.root) {
		if (this.root === null) {
			this.root = new Node(val);
			return this;
		}
		if (val < current.val) {
			if (current.left) this.insertRecursively(val, current.left);
			else {
				current.left = new Node(val);
			}
		}
		if (val > current.val) {
			if (current.right) this.insertRecursively(val, current.right);
			else {
				current.right = new Node(val);
			}
		}
		return this;
	}

	/** find(val): search the tree for a node with value val.
	 * return the node, if found; else undefined. Uses iteration. */

	find(val) {
		let current = this.root;
		while (current) {
			if (val === current.val) {
				return current;
			}
			if (val < current.val) {
				current = current.left;
			}
			if (val > current.val) {
				current = current.right;
			}
		}
		return undefined;
	}

	/** findRecursively(val): search the tree for a node with value val.
	 * return the node, if found; else undefined. Uses recursion. */

	findRecursively(val, current = this.root) {
		if (!current) {
			return undefined;
		}
		if (val === current.val) {
			return current;
		}
		if (val < current.val) {
			return this.findRecursively(val, current.left);
		}
		if (val > current.val) {
			return this.findRecursively(val, current.right);
		}
	}

	/** dfsPreOrder(): Traverse the array using pre-order DFS.
	 * Return an array of visited nodes. */

	dfsPreOrder(current = this.root, output = []) {
		output.push(current.val);
		if (current.left) this.dfsPreOrder(current.left, output);
		if (current.right) this.dfsPreOrder(current.right, output);
		return output;
	}

	/** dfsInOrder(): Traverse the array using in-order DFS.
	 * Return an array of visited nodes. */

	dfsInOrder(current = this.root, output = []) {
		if (current.left) this.dfsInOrder(current.left, output);
		output.push(current.val);
		if (current.right) this.dfsInOrder(current.right, output);
		return output;
	}

	/** dfsPostOrder(): Traverse the array using post-order DFS.
	 * Return an array of visited nodes. */

	dfsPostOrder(current = this.root, output = []) {
		if (current.left) this.dfsPostOrder(current.left, output);
		if (current.right) this.dfsPostOrder(current.right, output);
		output.push(current.val);
		return output;
	}

	/** bfs(): Traverse the array using BFS.
	 * Return an array of visited nodes. */

	bfs() {
		let nodes = [this.root];
		for (let i = 0; i < nodes.length; i++) {
			if (nodes[i].left) {
				nodes.push(nodes[i].left);
			}
			if (nodes[i].right) {
				nodes.push(nodes[i].right);
			}
		}
		return nodes.map((node) => node.val);
	}

	/** Further Study!
	 * remove(val): Removes a node in the BST with the value val.
	 * Returns the removed node. */

	remove(val) {}

	/** Further Study!
	 * isBalanced(): Returns true if the BST is balanced, false otherwise. */

	isBalanced() {}

	/** Further Study!
	 * findSecondHighest(): Find the second highest value in the BST, if it exists.
	 * Otherwise return undefined. */

	findSecondHighest() {}
}

module.exports = BinarySearchTree;
