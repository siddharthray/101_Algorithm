class Graph {
    private adjList: Map<string, string[]>;

    constructor() {
        this.adjList = new Map<string, string[]>();
    }

    addVertex(vertex: string): void {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }

    addEdge(vertex1: string, vertex2: string): void {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.adjList.get(vertex1)?.push(vertex2);
        // If it's an undirected graph, add an edge in the opposite direction as well
        // this.adjList.get(vertex2)?.push(vertex1);
    }

    bfs(startingNode: string): void {
        let visited = new Set<string>();
        let queue: string[] = [];

        visited.add(startingNode);
        queue.push(startingNode);

        while (queue.length) {
            let currentNode = queue.shift() as string;
            console.log(currentNode);

            let neighbors = this.adjList.get(currentNode);
            if (neighbors) {
                for (let neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor);
                        queue.push(neighbor);
                    }
                }
            }
        }
    }
}

// Example usage
let graph = new Graph();
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');

graph.bfs('A'); // Starting BFS from vertex A
