var Graph = /** @class */ (function () {
    function Graph() {
        this.adjList = new Map();
    }
    Graph.prototype.addVertex = function (vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    };
    Graph.prototype.addEdge = function (vertex1, vertex2) {
        var _a;
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        (_a = this.adjList.get(vertex1)) === null || _a === void 0 ? void 0 : _a.push(vertex2);
        // If it's an undirected graph, add an edge in the opposite direction as well
        // this.adjList.get(vertex2)?.push(vertex1);
    };
    Graph.prototype.bfs = function (startingNode) {
        var visited = new Set();
        var queue = [];
        visited.add(startingNode);
        queue.push(startingNode);
        while (queue.length) {
            var currentNode = queue.shift();
            console.log(currentNode);
            var neighbors = this.adjList.get(currentNode);
            if (neighbors) {
                for (var _i = 0, neighbors_1 = neighbors; _i < neighbors_1.length; _i++) {
                    var neighbor = neighbors_1[_i];
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor);
                        queue.push(neighbor);
                    }
                }
            }
        }
    };
    return Graph;
}());
// Example usage
var graph = new Graph();
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.bfs('A'); // Starting BFS from vertex A
