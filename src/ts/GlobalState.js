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
const SOLIDRED = "#EF5350";
const LIGHTRED = "#D5756C";
const BLUE = "#67BBFF";
const GREEN = "#4CAF50";
const YELLOW = "#E5C07B";
const FILEBG = "#21252B";
const FILEBGSELECTED = "#4b4e5578";
const FILEBORDER = "#67bbff";
export { currentAddableNode, changeAddableNode, currentAlgorithm, changeAlgorithm, currentMaze, changeMaze, currentSpeed, changeSpeed, SOLIDRED, LIGHTRED, BLUE, GREEN, YELLOW, FILEBG, FILEBGSELECTED, FILEBORDER, };
