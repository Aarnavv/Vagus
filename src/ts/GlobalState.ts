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

const SOLIDRED: string = "#EF5350";
const LIGHTRED: string = "#D5756C";
const BLUE: string = "#67BBFF";
const GREEN: string = "#4CAF50";
const YELLOW: string = "#E5C07B";
const FILEBG: string = "#21252B";
const FILEBGSELECTED: string = "#4b4e5578";
const FILEBORDER: string = "#67bbff";



export {
    currentAddableNode,
    changeAddableNode,
    currentAlgorithm,
    changeAlgorithm,
    currentMaze,
    changeMaze,
    currentSpeed,
    changeSpeed,
    SOLIDRED,
    LIGHTRED,
    BLUE,
    GREEN,
    YELLOW,
    FILEBG,
    FILEBGSELECTED,
    FILEBORDER,
};