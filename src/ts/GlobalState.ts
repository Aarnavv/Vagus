import {AlgoType, MazeType, NodeType, SpeedType} from "./Types";
import Graph from "./Graph";

let currentAddableNode: NodeType = null;
let currentAlgorithm: AlgoType =null;
let currentMaze: MazeType = MazeType.none;
let currentSpeed: SpeedType = SpeedType.percent100;

function changeAddableNode(toThis: NodeType) {
  currentAddableNode = toThis;
}

function changeAlgorithm(toThis : AlgoType) {
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
const WALL_NODE_COLOR: string = "#484E5B"

const GRAPH = new Graph<number>((a, b): number => {
  return a === b ? 0 : a < b ? -1 : 1;
});

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
  WALL_NODE_COLOR,
  GRAPH
};