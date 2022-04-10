import {AlgoType, MazeType, NodeType, SpeedType} from "./Types";

let currentAddableNode:NodeType = NodeType.normal;
let currentAlgorithm: AlgoType = AlgoType.aStarSearch;
let currentMaze: MazeType = MazeType.none;
let currentSpeed: SpeedType = SpeedType.percent100;

function changeAddableNode(toThis: NodeType) {
    currentAddableNode = toThis;
}

function changeAlgorithm(toThis: AlgoType) {
    currentAlgorithm = toThis;
}

function changeMaze(toThis: MazeType) {
    currentMaze = toThis;
}

function changeSpeed(toThis: SpeedType) {
    currentSpeed = toThis;
}



export {
    currentAddableNode,
    changeAddableNode,
    currentAlgorithm,
    changeAlgorithm,
    currentMaze,
    changeMaze,
    currentSpeed,
    changeSpeed
};