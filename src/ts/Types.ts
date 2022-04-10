export enum NodeType {
    normal = 'reg-node',
    path = 'path-node',
    bomb = 'bomb-node',
    visited = 'visited-node',
    weight = 'weight-node',
    wall = 'wall-node'
}

export enum AlgoType {
    djikstrasSearch='djiktras-algo',//this will be djikstras-algo
    aStarSearch='aStar-algo',
    bellmanFord='bellmanFord-algo',
    breadthFirstSearch='bfs-algo',
    depthFirstSearch='dfs-algo',
    biDirectionalSearch='bd-algo'
}

export enum MazeType{
    none='none',
    gridMaze='gridMaze-maze',
    randomMaze='randomMaze-maze',
    diagonalCutMaze='diagonalCutMaze-maze'
}

export enum SpeedType{
    percent100=100,
    percent50=50,
    percent25=25
}