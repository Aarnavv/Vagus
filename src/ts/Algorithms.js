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
        var _this_1 = this;
        if (!node)
            return;
        visited.set(node.getData(), true);
        dfsCollector.push(node);
        node.getAdjNodes().forEach(function (edge) {
            if (!visited.has(edge.dest.getData())) {
                _this_1.internalDFS(edge.dest, visited, dfsCollector);
            }
        });
    };
    Algorithms.prototype.dfs = function (start, end) {
        var _this_1 = this;
        var visited = new Map();
        var dfsCollector = [];
        var finishIndex = this.graph.nodes.get(end);
        if (finishIndex === undefined)
            return [];
        this.graph.nodes.get(start).getAdjNodes().forEach(function (edge) {
            if (!visited.has(edge.dest.getData())) {
                _this_1.internalDFS(edge.dest, visited, dfsCollector);
            }
        });
        var at = dfsCollector.findIndex(function (node) {
            return node.getData() === end;
        });
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
        var _this_1 = this;
        var visited = new Map();
        var bfsCollector = [];
        var finishIndex = this.graph.nodes.get(end);
        if (finishIndex === undefined)
            return [];
        this.graph.nodes.get(start).getAdjNodes().forEach(function (edge) {
            if (!visited.has(edge.dest.getData())) {
                _this_1.internalBFS(edge.dest, visited, bfsCollector);
            }
        });
        var at = bfsCollector.findIndex(function (node) {
            return node.getData() === end;
        });
        if (at < 0)
            return bfsCollector;
        bfsCollector.splice(at + 1);
        return bfsCollector;
    };
    Algorithms.prototype.dijkstras = function (start, end) {
        var _a = this.internalDijkstras(start, end), dist = _a[0], prev = _a[1];
        // the rest is just finding the path to use.
        var path = [];
        if (dist.get(end) === Infinity)
            return [path, dist, prev];
        for (var at = end; at !== undefined; at = prev.get(at))
            path.unshift(at);
        return [path, dist, prev];
    };
    Algorithms.prototype.aStar = function (start, end) {
        var _a = this.internalAStar(start, end), dist = _a[0], prev = _a[1];
        // this is just to reconstruct the path for a*;
        var path = [];
        if (dist.get(end) === Infinity)
            return [path, dist, prev];
        for (var at = end; at !== undefined; at = prev.get(at))
            path.unshift(at);
        return [path, dist, prev];
    };
    Algorithms.prototype.internalAStar = function (start, end) {
        var _this_1 = this;
        var dist = new Map();
        var visited = new Map();
        var prev = new Map();
        this.graph.nodes.forEach(function (node) {
            node.getData() !== start ? dist.set(node.getData(), Infinity) : dist.set(start, 0);
        });
        var finish = this.graph.nodes.get(end);
        var PQ = new priority_queue_1.PriorityQueue(function (_this, _that) {
            return _this.heuristic < _that.heuristic ? -1 : _this.heuristic === _that.heuristic ? 0 : 1;
        });
        PQ.enqueue({ label: start, heuristic: 0 });
        var _loop_1 = function () {
            var _a = PQ.dequeue(), label = _a.label, heuristic = _a.heuristic;
            visited.set(label, true);
            if (dist.get(label) < heuristic)
                return "continue";
            this_1.graph.nodes.get(label).getAdjNodes().forEach(function (edge) {
                var dest = edge.dest.getData();
                if (!visited.has(dest)) {
                    //the below thing is the heuristic, it give 80% weight to distance and 20% weight to cost.
                    var newHeuristic = dist.get(label) + (0.8 * _this_1.graph.distBw(_this_1.graph.nodes.get(edge.dest.getData()), finish) + 0.2 * edge.cost);
                    if (newHeuristic < dist.get(dest)) {
                        prev.set(dest, label);
                        dist.set(dest, newHeuristic);
                        PQ.enqueue({ label: dest, heuristic: newHeuristic });
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
    Algorithms.prototype.bellmanFord = function (start, end) {
        var _a = this.internalBellmanFord(start, end), dist = _a[0], prev = _a[1];
        console.log(prev);
        var path = [];
        if (dist.get(end) === Infinity)
            return [path, dist, prev];
        for (var at = end; at !== undefined; at = prev.get(at))
            path.unshift(at);
        return [path, dist, prev];
    };
    Algorithms.prototype.internalBellmanFord = function (start, end) {
        var dist = new Map();
        var edgeList = new Map();
        var prev = new Map();
        this.graph.nodes.forEach(function (node) {
            node.getData() !== start ? dist.set(node.getData(), Infinity) : dist.set(start, 0);
            edgeList.set(node.getData(), node.getAdjNodes());
        });
        var V = this.graph.nodes.size;
        for (var v = 0; v < V - 1; v++) {
            this.graph.nodes.forEach(function (node) {
                node.getAdjNodes().forEach(function (edge) {
                    if (dist.get(node.getData()) + edge.cost < dist.get(edge.dest.getData())) {
                        dist.set(edge.dest.getData(), (dist.get(node.getData()) + edge.cost));
                        prev.set(edge.dest.getData(), node.getData());
                    }
                });
            });
        }
        return [dist, prev];
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
        var _loop_2 = function () {
            var _a = PQ.dequeue(), label = _a.label, minDist = _a.minDist;
            visited.set(label, true);
            if (dist.get(label) < minDist)
                return "continue";
            this_2.graph.nodes.get(label).getAdjNodes().forEach(function (edge) {
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
        var this_2 = this;
        while (!PQ.isEmpty()) {
            var state_2 = _loop_2();
            if (typeof state_2 === "object")
                return state_2.value;
        }
        return [dist, prev];
    };
    Algorithms.prototype.randomWalk = function (start, end) {
        var src = start;
        var path = [];
        while (true) {
            var node = this.graph.nodes.get(src);
            path.push(src);
            if (src === end)
                return path;
            src = node.getAdjNodes()[Math.floor(Math.random() * node.getAdjNodes().length)].dest.getData();
        }
    };
    Algorithms.prototype.biDirectional = function (start, end) {
        return [this.bfs(start, end), this.bfs(end, start)];
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
graph.addEdge(1, 2, 2);
graph.addEdge(1, 3, 3);
graph.addEdge(2, 4, 7);
graph.addEdge(3, 2, 1);
graph.addEdge(3, 5, 3);
graph.addEdge(4, 6, 1);
graph.addEdge(5, 4, 2);
graph.addEdge(5, 6, 5);
var algo = new Algorithms(graph);
algo.biDirectional(1, 6)[0].forEach(function (node) { return console.log(node.getData()); });
console.log("=================================");
algo.biDirectional(1, 6)[1].forEach(function (node) { return console.log(node.getData()); });
