import { AlgoType, MazeType, NodeType, SpeedType } from "./Types";
let currentAddableNode = NodeType.normal;
let currentAlgorithm = AlgoType.aStarSearch;
let currentMaze = MazeType.none;
let currentSpeed = SpeedType.percent100;
function changeAddableNode(toThis) {
    currentAddableNode = toThis;
}
function changeAlgorithm(toThis) {
    currentAlgorithm = toThis;
}
function changeMaze(toThis) {
    currentMaze = toThis;
}
function changeSpeed(toThis) {
    currentSpeed = toThis;
}
export { currentAddableNode, changeAddableNode, currentAlgorithm, changeAlgorithm, currentMaze, changeMaze, currentSpeed, changeSpeed };
