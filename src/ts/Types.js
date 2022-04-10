"use strict";
exports.__esModule = true;
exports.SpeedType = exports.MazeType = exports.AlgoType = exports.NodeType = void 0;
var NodeType;
(function (NodeType) {
    NodeType["normal"] = "reg-node";
    NodeType["path"] = "path-node";
    NodeType["bomb"] = "bomb-node";
    NodeType["visited"] = "visited-node";
    NodeType["weight"] = "weight-node";
    NodeType["wall"] = "wall-node";
})(NodeType = exports.NodeType || (exports.NodeType = {}));
var AlgoType;
(function (AlgoType) {
    AlgoType["djikstrasSearch"] = "djiktras-algo";
    AlgoType["aStarSearch"] = "aStar-algo";
    AlgoType["bellmanFord"] = "bellmanFord-algo";
    AlgoType["breadthFirstSearch"] = "bfs-algo";
    AlgoType["depthFirstSearch"] = "dfs-algo";
    AlgoType["biDirectionalSearch"] = "bd-algo";
})(AlgoType = exports.AlgoType || (exports.AlgoType = {}));
var MazeType;
(function (MazeType) {
    MazeType["none"] = "none";
    MazeType["gridMaze"] = "gridMaze-maze";
    MazeType["randomMaze"] = "randomMaze-maze";
    MazeType["diagonalCutMaze"] = "diagonalCutMaze-maze";
})(MazeType = exports.MazeType || (exports.MazeType = {}));
var SpeedType;
(function (SpeedType) {
    SpeedType[SpeedType["percent100"] = 100] = "percent100";
    SpeedType[SpeedType["percent50"] = 50] = "percent50";
    SpeedType[SpeedType["percent25"] = 25] = "percent25";
})(SpeedType = exports.SpeedType || (exports.SpeedType = {}));
