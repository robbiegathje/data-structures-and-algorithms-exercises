class Node {
	constructor(value, adjacent = new Set()) {
		this.value = value;
		this.adjacent = adjacent;
	}
}

class Graph {
	constructor() {
		this.nodes = new Set();
	}

	// this function accepts a Node instance and adds it to the nodes property on the graph
	addVertex(vertex) {
		this.nodes.add(vertex);
	}

	// this function accepts an array of Node instances and adds them to the nodes property on the graph
	addVertices(vertexArray) {
		for (let vertex of vertexArray) {
			this.addVertex(vertex);
		}
	}

	// this function accepts two vertices and updates their adjacent values to include the other vertex
	addEdge(firstVertex, secondVertex) {
		firstVertex.adjacent.add(secondVertex);
		secondVertex.adjacent.add(firstVertex);
	}

	// this function accepts two vertices and updates their adjacent values to remove the other vertex
	removeEdge(firstVertex, secondVertex) {
		firstVertex.adjacent.delete(secondVertex);
		secondVertex.adjacent.delete(firstVertex);
	}

	// this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
	removeVertex(vertex) {
		vertex.adjacent.forEach((adjVertex) => {
			this.removeEdge(vertex, adjVertex);
		});
		this.nodes.delete(vertex);
	}

	// this function returns an array of Node values using DFS
	depthFirstSearch(start) {
		let toVisitStack = [start];
		let haveSeen = new Set(toVisitStack);
		let output = [];

		while (toVisitStack.length > 0) {
			let current = toVisitStack.pop();
			output.push(current.value);
			for (let vertex of current.adjacent) {
				if (haveSeen.has(vertex)) {
					continue;
				} else {
					toVisitStack.push(vertex);
					haveSeen.add(vertex);
				}
			}
		}
		return output;
	}

	// this function returns an array of Node values using BFS
	breadthFirstSearch(start) {
		let toVisitStack = [start];
		let haveSeen = new Set(toVisitStack);
		let output = [];

		while (toVisitStack.length > 0) {
			let current = toVisitStack.shift();
			output.push(current.value);
			for (let vertex of current.adjacent) {
				if (haveSeen.has(vertex)) {
					continue;
				} else {
					toVisitStack.push(vertex);
					haveSeen.add(vertex);
				}
			}
		}
		return output;
	}
}

module.exports = { Graph, Node };
