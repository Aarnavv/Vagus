import {AlgoType, MazeType, NodeType, SpeedType} from "./Types";
import Graph from "./Graph";

class State<T> {
  private GRAPH: Graph<T>;
  private AddableNode: NodeType;
  private Algorithm: AlgoType;
  private Maze: MazeType;
  private Speed: SpeedType;
  private StartNode: T;
  private EndNode: T;
  private BombNode: T;

  constructor(_start:T =null , _end : T= null , _graph : Graph<T> = null) {
    this.AddableNode=null;
    this.Algorithm= null;
    this.Maze = MazeType.none;
    this.Speed= SpeedType.percent100;
    this.StartNode = _start;
    this.EndNode = _end;
    this.BombNode = null;
    this.GRAPH=_graph;
  }

  graph():Graph<T> {return this.GRAPH;}
  addableNode():NodeType{return this.AddableNode;}
  algorithm(): AlgoType{return this.Algorithm;}
  maze() :MazeType {return this.Maze;}
  speed(): SpeedType {return this.Speed;}
  startNode () : T {return this.StartNode;}
  endNode () : T {return this.EndNode;}
  bombNode() :T {return this.BombNode;}

  changeAddableNode(toThis: NodeType) {
    this.AddableNode = toThis;
  }

  changeAlgorithm(toThis : AlgoType) {
    this.Algorithm = toThis;
  }

  changeMaze(toThis: MazeType) {
    this.Maze = toThis;
  }

  changeSpeed(toThis: SpeedType) {
    this.Speed = toThis;
  }
  changeStartNode(toThis: T){
    this.StartNode = toThis;
  }
  changeEndNode(toThis :T ){
    this.EndNode=toThis;
  }
  changeBombNode(toThis : T ){
    this.BombNode = toThis;
  }
  changeGraph(toThis : Graph<T>){
    this.GRAPH=toThis;
  }
}

let currentState= new State<number>();
currentState.changeGraph( new Graph<number>((a , b):number=>{
  return a===b ? 0 : a < b ? -1 : 1 ;
}))

export default  currentState;
