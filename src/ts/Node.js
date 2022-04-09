"use strict";
exports.__esModule = true;
var Edge_1 = require("./Edge");
var Node = /** @class */ (function () {
    function Node(data, comparator) {
        this.data = data;
        this.comparator = comparator;
        this.adjNodes = [];
        this.adjNodes.push(new Edge_1["default"](this, 0));
    }
    Node.prototype.getData = function () {
        return this.data;
    };
    Node.prototype.getAdjNodes = function () {
        return this.adjNodes;
    };
    Node.prototype.addAdjNode = function (node, cost) {
        this.adjNodes.push(new Edge_1["default"](node, cost));
    };
    Node.prototype.rmAdjNode = function (data) {
        var _this = this;
        var index = this.adjNodes.findIndex(function (node) { return _this.comparator(node.dest.data, data) === 0; });
        if (index > -1) {
            return this.adjNodes.splice(index, 1)[0].dest;
        }
        else
            return null;
    };
    Node.prototype.toString = function () {
        var metaData = 'data:' + this.data + ',\nEdges:[\n';
        this.adjNodes.forEach(function (edge) {
            metaData += "    {dest:" + edge.dest.getData() + ", cost:" + edge.cost + "},\n";
        });
        return metaData + ']';
    };
    return Node;
}());
exports["default"] = Node;
