"use strict";
exports.__esModule = true;
var Edge_1 = require("./Edge");
var Node = /** @class */ (function () {
    function Node(data, comparator, x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.xCoord = 0;
        this.yCoord = 0;
        this.data = data;
        this.comparator = comparator;
        this.adjNodes = [];
        this.adjNodes.push(new Edge_1["default"](this, 0));
        this.setX(x);
        this.setY(y);
    }
    Node.prototype.setX = function (x) {
        if (typeof x === "string")
            this.xCoord = parseFloat(x);
        else
            this.xCoord = x;
    };
    Node.prototype.setY = function (y) {
        if (typeof y === "string")
            this.yCoord = parseFloat(y);
        else
            this.yCoord = y;
    };
    Node.prototype.setCoords = function (x, y) {
        this.setX(x);
        this.setY(y);
    };
    Node.prototype.x = function () {
        return this.xCoord;
    };
    Node.prototype.y = function () {
        return this.yCoord;
    };
    Node.prototype.coordinates = function () {
        return [this.xCoord, this.yCoord];
    };
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
        var metaData = 'data:' + this.data + ',\nNeighbours:[\n';
        this.adjNodes.forEach(function (edge) {
            metaData += "    {dest:" + edge.dest.getData() + ", cost:" + edge.cost + "},\n";
        });
        metaData += "]\ncoords:{";
        metaData += "\n     x:" + this.xCoord;
        metaData += "\n     y:" + this.yCoord;
        metaData += "\n}";
        return metaData;
    };
    return Node;
}());
exports["default"] = Node;
//
