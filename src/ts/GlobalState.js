import { MazeType, SpeedType } from "./Types";
import Graph from "./Graph";
class State {
    PRES_GRAPH;
    INIT_GRAPH;
    AddableNode;
    Algorithm;
    Maze;
    Speed;
    StartNode;
    EndNode;
    BombNode;
    constructor(_start = null, _end = null, _graph = null) {
        this.AddableNode = null;
        this.Algorithm = null;
        this.Maze = MazeType.none;
        this.Speed = SpeedType.percent100;
        this.StartNode = _start;
        this.EndNode = _end;
        this.BombNode = null;
        this.INIT_GRAPH = _graph;
        this.PRES_GRAPH = _graph;
    }
    graph() { return this.PRES_GRAPH; }
    initGraph() { return this.INIT_GRAPH; }
    addableNode() { return this.AddableNode; }
    algorithm() { return this.Algorithm; }
    maze() { return this.Maze; }
    speed() { return this.Speed; }
    startNode() { return this.StartNode; }
    endNode() { return this.EndNode; }
    bombNode() { return this.BombNode; }
    changeAddableNode(toThis) {
        this.AddableNode = toThis;
    }
    changeAlgorithm(toThis) {
        this.Algorithm = toThis;
    }
    changeMaze(toThis) {
        this.Maze = toThis;
    }
    changeSpeed(toThis) {
        this.Speed = toThis;
    }
    changeStartNode(toThis) {
        this.StartNode = toThis;
    }
    changeEndNode(toThis) {
        this.EndNode = toThis;
    }
    changeBombNode(toThis) {
        this.BombNode = toThis;
    }
    changeGraph(toThis) {
        this.PRES_GRAPH = toThis;
    }
    changeInitGraph(toThis) {
        this.INIT_GRAPH = toThis;
    }
}
let currentState = new State();
currentState.changeGraph(new Graph((a, b) => {
    return a === b ? 0 : a < b ? -1 : 1;
}));
currentState.changeInitGraph(new Graph((a, b) => {
    return a === b ? 0 : a < b ? -1 : 1;
}));
export default currentState;
