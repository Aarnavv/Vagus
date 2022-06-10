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
export var MazeGenerationType;
(function (MazeGenerationType) {
    MazeGenerationType["none"] = "none";
    MazeGenerationType["generateRandomMaze"] = "generateRandomMaze-maze";
    MazeGenerationType["generateLeastCostPathBlocker"] = "generateLeastCostPathBlockerMaze-maze";
    MazeGenerationType["generateRidges"] = "generateRidges-maze";
    MazeGenerationType["generateWeightedRandomMaze"] = "generateWeightedRandomMaze-maze";
    MazeGenerationType["generateBlockedRandomMaze"] = "generateBlockedRandomMaze-maze";
})(MazeGenerationType || (MazeGenerationType = {}));
export var SpeedType;
(function (SpeedType) {
    SpeedType[SpeedType["percent100"] = 100] = "percent100";
    SpeedType[SpeedType["percent50"] = 50] = "percent50";
    SpeedType[SpeedType["percent25"] = 25] = "percent25";
})(SpeedType || (SpeedType = {}));
