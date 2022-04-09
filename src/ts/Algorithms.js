"use strict";
exports.__esModule = true;
var Graph_1 = require("./Graph");
var Algorithms = /** @class */ (function () {
    function Algorithms(_assignGraph) {
        this.graph = _assignGraph;
        this.comparator = this.graph.comparator;
    }
    Algorithms.prototype.internalDFS = function (node, visited, dfsCollector) {
        var _this = this;
        if (!node)
            return;
        visited.set(node.getData(), true);
        dfsCollector.push(node);
        node.getAdjNodes().forEach(function (edge) {
            if (!visited.has(edge.dest.getData())) {
                _this.internalDFS(edge.dest, visited, dfsCollector);
            }
        });
    };
    Algorithms.prototype.dfs = function (start, end) {
        var _this = this;
        var visited = new Map();
        var dfsCollector = [];
        var finishIndex = this.graph.nodes.get(end);
        if (finishIndex === undefined)
            return [];
        this.graph.nodes.get(start).getAdjNodes().forEach(function (edge) {
            if (!visited.has(edge.dest.getData())) {
                _this.internalDFS(edge.dest, visited, dfsCollector);
            }
        });
        var at = dfsCollector.findIndex(function (node) { return node.getData() === end; });
        if (at < 0)
            return dfsCollector;
        dfsCollector.splice(at + 1);
        return dfsCollector;
    };
    Algorithms.prototype.internalBFS = function (node, visited, bfsCollector) {
        var Q = [];
        if (!node)
            return;
        Q.push(node);
        var pointer = 0;
        visited.set(node.getData(), true);
        while (pointer !== Q.length) {
            node = Q[pointer++];
            if (node === null)
                continue;
            bfsCollector.push(node);
            node.getAdjNodes().forEach(function (item) {
                if (!visited.has(item.dest.getData())) {
                    visited.set(item.dest.getData(), true);
                    Q.push(item.dest);
                }
            });
        }
    };
    Algorithms.prototype.bfs = function (start, end) {
        var _this = this;
        var visited = new Map();
        var bfsCollector = [];
        var finishIndex = this.graph.nodes.get(end);
        if (finishIndex === undefined)
            return [];
        this.graph.nodes.get(start).getAdjNodes().forEach(function (edge) {
            if (!visited.has(edge.dest.getData())) {
                _this.internalBFS(edge.dest, visited, bfsCollector);
            }
        });
        var at = bfsCollector.findIndex(function (node) { return node.getData() === end; });
        if (at < 0)
            return bfsCollector;
        bfsCollector.splice(at + 1);
        return bfsCollector;
    };
    Algorithms.prototype.djikstrasAlgorithm = function (start, end) {
        var _a = this.internalDjikstrasAlgorithm(start), dist = _a[0], prev = _a[1];
        var path = [];
        if (dist.get(end) === Infinity)
            return path;
        for (var at = end; end !== null; at = prev.get(at)) {
            path.push(at);
        }
        path.reverse();
        return path;
    };
    Algorithms.prototype.internalDjikstrasAlgorithm = function (start) {
        var visited = new Map();
        var distances = new Map();
        var prev = new Map();
        this.graph.nodes.forEach(function (node) {
            node.getData() !== start ? distances.set(node.getData(), Infinity) : distances.set(node.getData(), 0);
            visited.set(node.getData(), false);
            prev.set(node.getData(), null);
        });
        console.table(visited);
    };
    return Algorithms;
}());
var graph = new Graph_1["default"](function (a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
});
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);
graph.addNode(6);
graph.addNode(7);
graph.addNode(8);
graph.addNode(9);
graph.addNode(10);
graph.addEdge(1, 2, 0);
graph.addEdge(1, 5, 0);
graph.addEdge(1, 9, 0);
graph.addEdge(2, 3, 0);
graph.addEdge(3, 4, 0);
graph.addEdge(5, 6, 0);
graph.addEdge(5, 7, 0);
graph.addEdge(6, 8, 0);
graph.addEdge(9, 10, 0);
graph.addEdge(9, 0, 0);
graph.rmNode(0);
console.log(graph.toString());
