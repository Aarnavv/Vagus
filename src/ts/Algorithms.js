"use strict";
exports.__esModule = true;
var Graph_1 = require("./Graph");
var priority_queue_1 = require("@datastructures-js/priority-queue");
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
    Algorithms.prototype.dijkstras = function (start, end) {
        var _a = this.internalDijkstras(start, end), dist = _a[0], prev = _a[1];
        console.table(prev);
        var path = [];
        if (dist.get(end) === Infinity)
            return path;
        for (var at = end; at !== undefined; at = prev.get(at))
            path.unshift(at);
        return path;
    };
    Algorithms.prototype.internalDijkstras = function (start, end) {
        var dist = new Map();
        var visited = new Map();
        var prev = new Map();
        this.graph.nodes.forEach(function (node) {
            node.getData() !== start ? dist.set(node.getData(), Infinity) : dist.set(start, 0);
        });
        var PQ = new priority_queue_1.PriorityQueue(function (a, b) {
            return a.minDist < b.minDist ? -1 : a.minDist === b.minDist ? 0 : 1;
        });
        PQ.enqueue({ label: start, minDist: 0 });
        var _loop_1 = function () {
            var _a = PQ.dequeue(), label = _a.label, minDist = _a.minDist;
            visited.set(label, true);
            if (dist.get(label) < minDist)
                return "continue";
            this_1.graph.nodes.get(label).getAdjNodes().forEach(function (edge) {
                var dest = edge.dest.getData();
                if (!visited.has(dest)) {
                    var newDist = dist.get(label) + edge.cost;
                    if (newDist < dist.get(dest)) {
                        prev.set(dest, label);
                        dist.set(dest, newDist);
                        PQ.enqueue({ label: dest, minDist: newDist });
                    }
                }
            });
            if (label === end)
                return { value: [dist, prev] };
        };
        var this_1 = this;
        while (!PQ.isEmpty()) {
            var state_1 = _loop_1();
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return [dist, prev];
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
graph.addEdge(1, 2, 1);
graph.addEdge(1, 5, 2);
graph.addEdge(1, 9, 3);
graph.addEdge(2, 3, 4);
graph.addEdge(3, 4, 5);
graph.addEdge(5, 6, 6);
graph.addEdge(5, 7, 7);
graph.addEdge(6, 8, 8);
graph.addEdge(9, 10, 9);
graph.addEdge(9, 0, 10);
graph.rmNode(0);
var algo = new Algorithms(graph);
var path = '';
console.log(algo.dijkstras(10, 1));
