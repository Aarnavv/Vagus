import { AlgoType, MazeType, NodeType, SpeedType } from "./Types";

let currentAddableNode: NodeType = NodeType.normal;
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

const SOLID_RED: string = "#EF5350";
const LIGHT_RED: string = "#D5756C";
const BLUE: string = "#67BBFF";
const GREEN: string = "#4CAF50";
const YELLOW: string = "#E5C07B";
const FILE_BG: string = "#21252B";
const FILE_BG_SELECTED: string = "#4b4e5578";
const FILE_BORDER: string = "#67bbff";



export {
    currentAddableNode,
    changeAddableNode,
    currentAlgorithm,
    changeAlgorithm,
    currentMaze,
    changeMaze,
    currentSpeed,
    changeSpeed,
    SOLID_RED,
    LIGHT_RED,
    BLUE,
    GREEN,
    YELLOW,
    FILE_BG,
    FILE_BG_SELECTED,
    FILE_BORDER,
};