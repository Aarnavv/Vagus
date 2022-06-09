export var NodeType;
(function (NodeType) {
    NodeType["startNode"] = "start-node";
    NodeType["endNode"] = "end-node";
    NodeType["bombNode"] = "bomb-node";
    NodeType["weightNode"] = "weight-node";
    NodeType["wallNode"] = "wall-node";
})(NodeType || (NodeType = {}));
export var AlgoType;
(function (AlgoType) {
    AlgoType["dijkstrasSearch"] = "dijkstras-algo";
    AlgoType["aStarSearch"] = "a*-algo";
    AlgoType["bellmanFord"] = "bellmanFord-algo";
    AlgoType["breadthFirstSearch"] = "bfs-algo";
    AlgoType["depthFirstSearch"] = "dfs-algo";
    AlgoType["biDirectionalSearch"] = "bd-algo";
    AlgoType["randomWalk"] = "rand-algo";
    AlgoType["bestFirstSearch"] = "best-fs";
})(AlgoType || (AlgoType = {}));
export var MazeType;
(function (MazeType) {
    MazeType["none"] = "none";
    MazeType["gridMaze"] = "gridMaze-maze";
    MazeType["randomMaze"] = "randomMaze-maze";
    MazeType["diagonalCutMaze"] = "diagonalCutMaze-maze";
    MazeType["leastCostPathBlocker"] = "leastCostPathBlockerMaze-maze";
    MazeType["generateRidges"] = "generateRidges-maze";
})(MazeType || (MazeType = {}));
export var SpeedType;
(function (SpeedType) {
    SpeedType[SpeedType["percent100"] = 100] = "percent100";
    SpeedType[SpeedType["percent50"] = 50] = "percent50";
    SpeedType[SpeedType["percent25"] = 25] = "percent25";
})(SpeedType || (SpeedType = {}));
export var MazeGeneratorPropTypes;
(function (MazeGeneratorPropTypes) {
    MazeGeneratorPropTypes["onlyWeights"] = "w";
    MazeGeneratorPropTypes["onlyWalls"] = "W";
    MazeGeneratorPropTypes["weightsAndWalls"] = "wW";
})(MazeGeneratorPropTypes || (MazeGeneratorPropTypes = {}));
