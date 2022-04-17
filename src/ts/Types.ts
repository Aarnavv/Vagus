export enum NodeType {
  startNode = 'start-node',
  endNode = 'end-node',
  bombNode = 'bomb-node',
  weightNode = 'weight-node',
  wallNode = 'wall-node'
}

export enum AlgoType {
  dijkstrasSearch = "dijkstras-algo",
  aStarSearch = 'a*-algo',
  bellmanFord = 'bellmanFord-algo',
  breadthFirstSearch = 'bfs-algo',
  depthFirstSearch = 'dfs-algo',
  biDirectionalSearch = 'bd-algo',
  randomWalk = 'rand-algo'
}

export enum MazeType {
  none = 'none',
  gridMaze = 'gridMaze-maze',
  randomMaze = 'randomMaze-maze',
  diagonalCutMaze = 'diagonalCutMaze-maze'
}

export enum SpeedType {
  percent100 = 100,
  percent50 = 50,
  percent25 = 25
}