export var NodeType;
(function (NodeType) {
    NodeType["normal"] = "reg-node";
    NodeType["path"] = "path-node";
    NodeType["bomb"] = "bomb-node";
    NodeType["visited"] = "visited-node";
    NodeType["weight"] = "weight-node";
    NodeType["wall"] = "wall-node";
})(NodeType || (NodeType = {}));
export var AlgoType;
(function (AlgoType) {
    AlgoType["djikstrasSearch"] = "djiktras-algo";
    AlgoType["aStarSearch"] = "aStar-algo";
    AlgoType["bellmanFord"] = "bellmanFord-algo";
    AlgoType["breadthFirstSearch"] = "bfs-algo";
    AlgoType["depthFirstSearch"] = "dfs-algo";
    AlgoType["biDirectionalSearch"] = "bd-algo";
})(AlgoType || (AlgoType = {}));
export var MazeType;
(function (MazeType) {
    MazeType["none"] = "none";
    MazeType["gridMaze"] = "gridMaze-maze";
    MazeType["randomMaze"] = "randomMaze-maze";
    MazeType["diagonalCutMaze"] = "diagonalCutMaze-maze";
})(MazeType || (MazeType = {}));
export var SpeedType;
(function (SpeedType) {
    SpeedType[SpeedType["percent100"] = 100] = "percent100";
    SpeedType[SpeedType["percent50"] = 50] = "percent50";
    SpeedType[SpeedType["percent25"] = 25] = "percent25";
})(SpeedType || (SpeedType = {}));
