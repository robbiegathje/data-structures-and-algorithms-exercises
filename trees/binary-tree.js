/** BinaryTreeNode: node for a binary tree. */

class BinaryTreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinaryTree {
	constructor(root = null) {
		this.root = root;
	}

	/** minDepth(): return the minimum depth of the tree -- that is,
	 * the length of the shortest path from the root to a leaf. */

	minDepth() {
		if (!this.root) return 0;

		function minDepthHelper(node) {
			if (!node.left && !node.right) return 1;
			if (!node.left) return minDepthHelper(node.right) + 1;
			if (!node.right) return minDepthHelper(node.left) + 1;
			return (
				Math.min(minDepthHelper(node.left), minDepthHelper(node.right)) + 1
			);
		}

		return minDepthHelper(this.root);
	}

	/** maxDepth(): return the maximum depth of the tree -- that is,
	 * the length of the longest path from the root to a leaf. */

	maxDepth() {
		if (!this.root) return 0;

		function maxDepthHelper(node) {
			if (!node.left && !node.right) return 1;
			if (!node.left) return maxDepthHelper(node.right) + 1;
			if (!node.right) return maxDepthHelper(node.left) + 1;
			return (
				Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right)) + 1
			);
		}

		return maxDepthHelper(this.root);
	}

	/** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
	 * The path doesn't need to start at the root, but you can't visit a node more than once. */

	maxSum() {
		let result = 0;

		function maxSumHelper(node) {
			if (!node) return 0;
			let leftMax = maxSumHelper(node.left);
			let rightMax = maxSumHelper(node.right);
			leftMax = Math.max(leftMax, 0);
			rightMax = Math.max(rightMax, 0);

			result = Math.max(node.val + leftMax + rightMax, result);

			return Math.max(node.val + leftMax, node.val + rightMax, 0);
		}

		maxSumHelper(this.root);
		return result;
	}

	/** nextLarger(lowerBound): return the smallest value in the tree
	 * which is larger than lowerBound. Return null if no such value exists. */

	nextLarger(lowerBound) {
		let toVisitStack = [this.root];
		let numGreater = null;

		while (this.root && toVisitStack.length > 0) {
			let current = toVisitStack.pop();

			if (current.val > lowerBound) {
				if (!numGreater || current.val < numGreater) numGreater = current.val;
			}

			if (current.left) {
				toVisitStack.push(current.left);
			}
			if (current.right) {
				toVisitStack.push(current.right);
			}
		}
		return numGreater;
	}

	/** Further study!
	 * areCousins(node1, node2): determine whether two nodes are cousins
	 * (i.e. are at the same level but have different parents. ) */

	areCousins(node1, node2) {}

	/** Further study!
	 * serialize(tree): serialize the BinaryTree object tree into a string. */

	static serialize() {}

	/** Further study!
	 * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

	static deserialize() {}

	/** Further study!
	 * lowestCommonAncestor(node1, node2): find the lowest common ancestor
	 * of two nodes in a binary tree. */

	lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
