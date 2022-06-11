import {
  AlgoType,
  MazeGenerationType,
  NodeType,
  SpeedType
} from "./Types";
import Graph from "./Graph";



/**
 * This is the global head. The class is tasked and authorised to control
 * the State of all the functions and states present on the
 * Website.
 *
 * @author aditya , <adityavikramsinha19@gmail.com>
 */
class State<T> {

  // Current graph
  private PRES_GRAPH: Graph<T>;

  // Initialising graph.
  private INIT_GRAPH: Graph<T>;

  // State for the addable node folder
  private AddableNode: NodeType;

  // State for the runable algorithm
  private Algorithm: AlgoType;

  // State for the implementable maze
  private Maze: MazeGenerationType;

  // State for the executable speed.
  private Speed: SpeedType;

  // Start-node on the maze
  private StartNode: T;

  // End-node on the maze
  private EndNode: T;

  // Bomb node on the maze
  private BombNode: T;

  // Permission for execution
  private Run: boolean;

  /**
   * Constructs a graph will all values set to null.
   * Unless, the start , end and graph values are given.
   *
   * @param _start The start node of the maze
   * @param _end The end node of the maze
   * @param _graph The graph representation of the maze
   */
  constructor(_start: T = null, _end: T = null, _graph: Graph<T> = null) {
    this.AddableNode = null;
    this.Algorithm = null;
    this.Maze = MazeGenerationType.none;
    this.Speed = SpeedType.percent100;
    this.StartNode = _start;
    this.EndNode = _end;
    this.BombNode = null;
    this.INIT_GRAPH = _graph;
    this.PRES_GRAPH = _graph;
    this.Run = false;
  }

  /**
   *
   * @returns the graph representation of the HexBoard state.
   */
  graph(): Graph<T> { return this.PRES_GRAPH; }

  /**
   *
   * @returns the Initial graph representation of the HexBoard.
   */
  initGraph(): Graph<T> { return this.INIT_GRAPH; }

  /**
   *
   * @returns the addable node TYPe
   */
  addableNode(): NodeType { return this.AddableNode; }

  /**
   *
   * @returns the runable Algorithm type.
   */
  algorithm(): AlgoType { return this.Algorithm; }

  /**
   *
   * @returns the drawable maze pattern type
   */
  maze(): MazeGenerationType { return this.Maze; }

  /**
   *
   * @returns the executable speed type
   */
  speed(): SpeedType { return this.Speed; }

  /**
   *
   * @returns the start-node position ID of the HexBoard
   */
  startNode(): T { return this.StartNode; }

  /**
   *
   * @returns the end-node position ID of the HexBoard
   */
  endNode(): T { return this.EndNode; }

  /**
   *
   * @returns the bomb-node position ID of the HexBoard
   */
  bombNode(): T { return this.BombNode; }

  /**
   *
   * @returns run permission [true for running, false for not].
   */
  run(): boolean { return this.Run; }

  /**
   * Updates the addable node state.
   *
   * @param toThis the state to be updated to
   */
  changeAddableNode(toThis: NodeType): void{
    this.AddableNode = toThis;
  }

  /**
   * Updates the algorithm state
   *
   * @param toThis the state to be updated to
   */
  changeAlgorithm(toThis: AlgoType): void{
    this.Algorithm = toThis;
  }

  /**
   * Updates the maze type
   *
   * @param toThis the state to be updated to
   */
  changeMaze(toThis: MazeGenerationType): void{
    this.Maze = toThis;
  }

  /**
   * Updates the speed type
   *
   * @param toThis the state to be updated to
   */
  changeSpeed(toThis: SpeedType): void{
    this.Speed = toThis;
  }

  /**
   * Updates the start-node ID
   *
   * @param toThis the state to be updated to
   */
  changeStartNode(toThis: T): void{
    this.StartNode = toThis;
  }

  /**
   * Updates the end-node ID
   *
   * @param toThis the state to be updated to
   */
  changeEndNode(toThis: T): void{
    this.EndNode = toThis;
  }

  /**
   * Updates the bomb-node ID
   *
   * @param toThis the state to be updated to
   */
  changeBombNode(toThis: T | null): void{
    this.BombNode = toThis;
  }

  /**
   * Updates the value of the present graph.
   *
   * @param toThis the state to be updated to
   */
  changeGraph(toThis: Graph<T>): void{
    this.PRES_GRAPH = toThis;
  }

  /**
   * Updates the value of the init graph
   *
   * @param toThis the state to be updated to
   */
  changeInitGraph(toThis: Graph<T>) {
    this.INIT_GRAPH = toThis;
  }

  /**
   * Flips the run state.
   * If true, makes it to false.
   * If false, makes it to true.
   */
  changeRun() {
    this.Run = !this.Run;
  }
}

// declaring the state variable internally so that
// it gets imported into every file using it
let currentState = new State<number>();

// declaring the pres graph
currentState.changeGraph(new Graph<number>((a, b): number => {
  return a === b ? 0 : a < b ? -1 : 1;
}));

// delcaring the init graph
currentState.changeInitGraph(new Graph<number>((a, b): number => {
  return a === b ? 0 : a < b ? -1 : 1;
}));


// in the beginning,both init and pres are the same graphs.

export default currentState;
