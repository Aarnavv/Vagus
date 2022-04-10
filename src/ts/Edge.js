"use strict";
exports.__esModule = true;
var Edge = /** @class */ (function () {
    function Edge(dest, cost) {
        this.dest = dest;
        this.cost = cost;
    }
    Edge.prototype.changeCost = function (_newCost) { this.cost = _newCost; };
    Edge.prototype.changeDest = function (_newDest) { this.dest = _newDest; };
    Edge.prototype.toString = function () {
        return '{dest:' + this.dest + ', cost:' + this.cost + '}';
    };
    return Edge;
}());
exports["default"] = Edge;
