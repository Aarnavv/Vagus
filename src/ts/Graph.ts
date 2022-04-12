import Node from "./Node";
import { Algorithms } from "./Algorithms";

export default class Graph<T> {
  /**
   * has a Map of Nodes which are present in the graph
   */
  Nodes: Map<T, Node<T>> = new Map();
  /**
   * is a comparator for the graph
   */
  comparator: (a: T, b: T) => number;
  /**
   * tries to understand if the graph is cyclic or not,
   */
  isCyclic: boolean;
  /**
   *  is a boolean for if the graph is undirected or directed.
   */
  isUndirected: boolean;

  constructor(comparator: (a: T, b: T) => number) {
    this.comparator = comparator;
    this.isUndirected = false;
  }

  nodes():Map<T , Node<T>>{
    let nodes : Map<T , Node<T>> = new Map()
    this.Nodes.forEach((value ,key)=>{
      if(value.inUse()) nodes.set(key , value);
    })
    return nodes;
  }

  setNodeCoords(data: T, { x, y }: { x: number, y: number }) {
    this.nodes().get(data).setCoords(x, y);
  }

  nodeExists(data: T): boolean {
    return this.nodes().get(data) !== undefined;
  }

  edgeExists(source: T, destination: T): boolean {
    const src = this.nodes().get(source);
    const at: number = src.getAdjNodes().findIndex((edge) => {
      return edge.dest.getData() === destination;
    });
    return at >= 0;
  }

  addNode(data: T): Node<T> {
    let node = this.nodes().get(data);
    if (node!==undefined)
      return node;
    node = new Node(data, this.comparator);
    this.nodes().set(data, node);
    return node;
  }

  rmNode(data: T): Node<T> | null {
    const nodeToRm = this.nodes().get(data);
    if (!nodeToRm) return null;
    this.nodes().forEach((node) => {
      node.rmAdjNode(nodeToRm.getData());
    })
    this.nodes().delete(data);
    return nodeToRm;
  }

  addEdge(source: T, destination: T, cost: number): void {
    let src = this.addNode(source);
    let dest = this.addNode(destination);
    src.addAdjNode(dest, cost);
    if (this.isUndirected) dest.addAdjNode(src, cost);
  }


  rmEdge(source: T, destination: T) {
    const src = this.nodes().get(source);
    const dest = this.nodes().get(destination);
    if (src && dest) {
      src.rmAdjNode(destination);
      if (this.isUndirected)
        dest.rmAdjNode(source);
    }
  }

  distBw(_this: Node<T>, _that: Node<T>): number {
    return Math.sqrt(Math.pow(_that.x() - _this.x(), 2) + Math.pow(_that.y() - _this.y(), 2));
  }

  hasCycles(start: T, end: T): boolean {
    return new Algorithms(this).dfs(start, end)[0];
  }

  static revertNode<T>(data : T , _initGraph : Graph <T>, _presentGraph :Graph<T>):void{
    let initNode:Node<T> = _initGraph.nodes().get(data);
    _presentGraph.addNode(initNode.getData());
    initNode.getAdjNodes().forEach((edge)=>{
      initNode.addAdjNode(edge.dest, edge.cost);
      edge.dest.addAdjNode(initNode , edge.cost);
    });
  }
}