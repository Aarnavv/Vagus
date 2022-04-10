"use strict";
exports.__esModule = true;
var Node_1 = require("./Node");
var Graph = /** @class */ (function () {
    function Graph(comparator) {
        this.nodes = new Map();
        this.comparator = comparator;
        this.isUndirected = true;
    }
    Graph.prototype.setNodeCoords = function (data, _a) {
        var x = _a.x, y = _a.y;
        this.nodes.get(data).setCoords(x, y);
    };
    Graph.prototype.numberOfNodes = function () {
        return this.nodes.size;
    };
    Graph.prototype.nodesPresent = function () {
        return this.nodes;
    };
    Graph.prototype.nodeExists = function (data) {
        return this.nodes.get(data) !== undefined;
    };
    Graph.prototype.edgeExists = function (source, destination) {
        var src = this.nodes.get(source);
        var at = src.getAdjNodes().findIndex(function (edge) {
            return edge.dest.getData() === destination;
        });
        return at >= 0;
    };
    Graph.prototype.addNode = function (data) {
        var node = this.nodes.get(data);
        if (node)
            return node;
        node = new Node_1["default"](data, this.comparator);
        this.nodes.set(data, node);
        return node;
    };
    Graph.prototype.rmNode = function (data) {
        var nodeToRm = this.nodes.get(data);
        if (!nodeToRm)
            return null;
        this.nodes.forEach(function (node) {
            node.rmAdjNode(nodeToRm.getData());
        });
        this.nodes["delete"](data);
        return nodeToRm;
    };
    Graph.prototype.addEdge = function (source, destination, cost) {
        var src = this.addNode(source);
        var dest = this.addNode(destination);
        src.addAdjNode(dest, cost);
        if (this.isUndirected)
            dest.addAdjNode(src, cost);
    };
    Graph.prototype.rmEdge = function (source, destination) {
        var src = this.nodes.get(source);
        var dest = this.nodes.get(destination);
        if (src && dest) {
            src.rmAdjNode(destination);
            if (this.isUndirected)
                dest.rmAdjNode(source);
        }
    };
    Graph.prototype.distBw = function (_this, _that) {
        return Math.sqrt(Math.pow(_that.x() - _this.x(), 2) + Math.pow(_that.y() - _this.y(), 2));
    };
    return Graph;
}());
exports["default"] = Graph;
