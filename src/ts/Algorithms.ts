import Graph from './Graph';
import { MinPriorityQueue } from "@datastructures-js/priority-queue";
import Edge from "./Edge";
import { AlgoType } from "./Types";
import currentState from "./GlobalState";
import { Queue } from "queue-typescript";
import Node from "./Node";

export default class Algorithms<T> {
  graph: Graph<T>;
  comparator;
  public static EPS: number;

  constructor(_assignGraph: Graph<T>) {
    this.graph = _assignGraph;
    this.comparator = this.graph.comparator;
    Algorithms.EPS = 1e-5;
    // console.log(Algorithms.EPS);
  }

  bfs(start: T, end: T): [T[] | null, Set<T>] {
    const visited: Set<T> = new Set();
    const prev: Map<T, T> = new Map();
    const path: T[] = [];
    const Q = new Queue<T>();
    Q.enqueue(start);
    visited.add(start);
    while (Q.length !== 0) {
      let node: Node<T> = this.graph.nodes().get(Q.dequeue());
      visited.add(node.getData());
      if (node.getData() === end) {
        for (let at = end; at !== undefined; at = prev.get(at))
          path.unshift(at);
        return [path, visited];
      }
      node.getAdjNodes().forEach((edge) => {
        if (!visited.has(edge.dest.getData())) {
          visited.add(edge.dest.getData());
          prev.set(edge.dest.getData(), node.getData());
          Q.enqueue(edge.dest.getData());
        }
      });
    }
    return [null, visited];
  }

  dfs(start: T, end: T): [T[] | null, Set<T>] {
    let path: T[] = [];
    const visited: Set<T> = new Set();
    const internalDfs = (at: T) => {
      if (!visited.has(at)) {
        visited.add(at);
        path.push(at);
        if (at === end)
          return;
        this.graph.nodes().get(at).getAdjNodes().forEach((edge) => {
          internalDfs(edge.dest.getData())
        })
      }
    }

    internalDfs(start);
    const endIndex = path.indexOf(end);
    if (endIndex < 0) return [null, visited];
    else {
      path.splice(endIndex + 1)
      return [path, visited];
    }
  }

  dijkstras(start: T, end: T): [T[] | null, Set<T>] {
    const [dist, prev, visited] = this.internalDijkstras(start, end);
    // the rest is just finding the path to use.
    let path: T[] = [];
    if (dist.get(end) === Infinity)
      return [null, visited];
    for (let at: T = end; at !== undefined; at = prev.get(at)) path.unshift(at);
    return [path, visited];
  }

  aStar(start: T, end: T): [T[] | null, Set<T>] {
    const [dist, prev, visited] = this.internalAStar(start, end);
    // this is just to reconstruct the path for a*;
    let path: T[] = [];
    if (dist.get(end) === Infinity)
      return [null, visited];
    for (let at: T = end; at !== undefined; at = prev.get(at))
      path.unshift(at);
    return [path, visited];
  }

  bellmanFord(start: T, end: T): [T[] | null, Set<T>] {
    const [dist, prev, visited] = this.internalBellmanFord(start);
    let path: T[] = [];
    if (dist.get(end) === Infinity)
      return [null, visited];
    for (let at = end; at !== undefined; at = prev.get(at))
      path.unshift(at);
    return [path, visited];
  }

  internalBellmanFord(start: T): [Map<T, number>, Map<T, T>, Set<T>] {
    let dist: Map<T, number> = new Map();
    let edgeList: Map<T, Edge<T>[]> = new Map();
    let visited: Set<T> = new Set();
    let prev: Map<T, T> = new Map();
    this.graph.nodes().forEach((node) => {
      node.getData() !== start ? dist.set(node.getData(), Infinity) : dist.set(start, 0);
      edgeList.set(node.getData(), node.getAdjNodes());
    });
    const V = this.graph.nodes().size;
    for (let v: number = 0; v < V - 1; v++) {
      this.graph.nodes().forEach((node) => {
        node.getAdjNodes().forEach((edge) => {
          if (!visited.has(edge.dest.getData()))
            visited.add(edge.dest.getData());
          if (dist.get(node.getData()) + edge.cost < dist.get(edge.dest.getData())) {
            dist.set(edge.dest.getData(), dist.get(node.getData()) + edge.cost);
            prev.set(edge.dest.getData(), node.getData());
          }
        })
      })
    }
    return [dist, prev, visited];
  }

  randomWalk(start: T, end: T): T[] {
    let visited: Map<T, boolean> = new Map();
    let src: T = start;
    let path: T[] = [];
    while (src !== end) {
      let node = this.graph.nodes().get(src);
      path.push(src);
      visited.set(src, true);
      src = node.getAdjNodes()[Math.floor(Math.random() * node.getAdjNodes().length)].dest.getData();
    }
    return path;
  }

  biDirectional(start: T, end: T): [T[] | null, Set<T>, Set<T>] {
    const [pathFromStart] = this.dijkstras(start, end);
    if (pathFromStart === null) { 
      let [p1, visitedFromStart] = this.dijkstras(start, end);
      let [p2, visitedFromEnd] = this.dijkstras(end, start);
      return [pathFromStart, visitedFromStart, visitedFromEnd]; 
    }
    let spliceNode = pathFromStart[pathFromStart.length >> 1];
    let [p1, visitedFromStart] = this.dijkstras(start, spliceNode);
    let [p2, visitedFromEnd] = this.dijkstras(end, spliceNode);
    // console.log(visitedFromStart);
    // console.log(visitedFromEnd);
    return [pathFromStart, visitedFromStart, visitedFromEnd];
  }


  bestFirstSearch(start: T, end: T): [T[] | null, Set<T>] {
    let [prev, visited] = this.internalBestFirstSearch(start, end);
    if (prev === null) return [null, visited];
    let path: T[] = [];
    for (let at = end; at !== undefined; at = prev.get(at))
      path.unshift(at);
    return [path, visited];
  }

  private internalBestFirstSearch(start: T, end: T): [Map<T, T>, Set<T>] {
    type Priority = {
      label: T,
      minHeuristic: number
    }
    let PQ = new MinPriorityQueue<Priority>((promisingNode) => promisingNode.minHeuristic);
    let prev: Map<T, T> = new Map;
    let visited: Set<T> = new Set();
    let dest = this.graph.nodes().get(start), endNode = this.graph.nodes().get(end);
    PQ.enqueue({ label: start, minHeuristic: this.graph.distBw(dest, endNode) });
    while (!PQ.isEmpty()) {
      const { label } = PQ.dequeue();
      visited.add(label);
      this.graph.nodes().get(label).getAdjNodes().forEach((edge) => {
        let destData = edge.dest.getData();
        if (!visited.has(destData)) {
          let newHeuristic = this.graph.distBw(edge.dest, endNode);
          PQ.enqueue({ label: destData, minHeuristic: newHeuristic });
          prev.set(destData, label);
        }
      });
      if (label === end) return [prev, visited];
    }
    return [null, visited];
  }


  private internalAStar(start: T, end: T): [Map<T, number>, Map<T, T>, Set<T>] {
    type Priority = {
      label: T,
      minDist: number,
      minHeuristic: number
    }
    let PQ = new MinPriorityQueue<Priority>((promisingNode) => promisingNode.minHeuristic);
    let dist: Map<T, number> = new Map(), prev: Map<T, T> = new Map();
    let visited: Set<T> = new Set();
    this.graph.nodes().forEach((node) => {
      node.getData() !== start ? dist.set(node.getData(), Infinity) : dist.set(start, 0);
    });
    let dest = this.graph.nodes().get(start), endNode = this.graph.nodes().get(end);
    PQ.enqueue({ label: start, minDist: 0, minHeuristic: this.graph.distBw(dest, endNode) });
    while (!PQ.isEmpty()) {
      const { label, minDist } = PQ.dequeue();
      visited.add(label);
      if (dist.get(label) < minDist)
        continue;
      this.graph.nodes().get(label).getAdjNodes().forEach((edge) => {
        let destData = edge.dest.getData();
        if (!visited.has(destData)) {
          let newDist = dist.get(label) + edge.cost;
          let newHeuristic = (this.graph.distBw(this.graph.nodes().get(destData), endNode, 'e')) / 1000000 * newDist;
          if (newDist < dist.get(destData)) {
            prev.set(destData, label);
            dist.set(destData, newDist);
            PQ.enqueue({ label: destData, minDist: newDist, minHeuristic: newHeuristic });
          }
        }
      });
      if (label === end) return [dist, prev, visited];
    }
    return [dist, prev, visited];
  }

  private internalDijkstras(start: T, end: T): [Map<T, number>, Map<T, T>, Set<T>] {
    type Priority = {
      label: T,
      minDist: number;
    }
    let PQ = new MinPriorityQueue<Priority>((promisingNode) => promisingNode.minDist);
    let dist: Map<T, number> = new Map(), prev: Map<T, T> = new Map();
    let visited: Set<T> = new Set();
    this.graph.nodes().forEach((node) => {
      node.getData() !== start ? dist.set(node.getData(), Infinity) : dist.set(start, 0);
    });
    PQ.enqueue({ label: start, minDist: 0 });
    while (!PQ.isEmpty()) {
      const { label, minDist } = PQ.dequeue();
      visited.add(label);
      if (dist.get(label) < minDist)
        continue;
      this.graph.nodes().get(label).getAdjNodes().forEach((edge) => {
        const dest = edge.dest.getData();
        if (!visited.has(dest)) {
          let newDist = dist.get(label) + edge.cost;
          if (newDist < dist.get(dest)) {
            prev.set(dest, label);
            dist.set(dest, newDist);
            PQ.enqueue({ label: dest, minDist: newDist });
          }
        }
      });
      if (label === end) return [dist, prev, visited];
    }
    return [dist, prev, visited];
  }

  static runAlgoFromGlobalStateNoBomb(): { path: number[], visitedInOrder: Set<number> } {
    let path: number[] = [];
    let algo: Algorithms<number> = new Algorithms<number>(currentState.graph());
    let visitedInOrder: Set<number> = new Set();
    let algoType: AlgoType = currentState.algorithm();
    if (algoType === AlgoType.dijkstrasSearch)
      [path, visitedInOrder] = algo.dijkstras(currentState.startNode(), currentState.endNode());
    else if (algoType === AlgoType.aStarSearch)
      [path, visitedInOrder] = algo.aStar(currentState.startNode(), currentState.endNode());
    else if (algoType === AlgoType.breadthFirstSearch)
      [path, visitedInOrder] = algo.bfs(currentState.startNode(), currentState.endNode());
    else if (algoType === AlgoType.depthFirstSearch)
      [path, visitedInOrder] = algo.dfs(currentState.startNode(), currentState.endNode());
    else if (algoType === AlgoType.bellmanFord)
      [path, visitedInOrder] = algo.bellmanFord(currentState.startNode(), currentState.endNode());
    else if (algoType === AlgoType.randomWalk) {
      path = algo.randomWalk(currentState.startNode(), currentState.endNode());
      visitedInOrder = null;
    }
    else if (algoType === AlgoType.bestFirstSearch) {
      [path, visitedInOrder] = algo.bestFirstSearch(currentState.startNode(), currentState.endNode());
    }
    //else //something regarding bidirectional search needs to be done.
    return { path, visitedInOrder };
  }
  static runAlgorithmGlobalStateYesBomb(): { path: number[] | null, visitedP1: Set<number>, visitedP2: Set<number> } {
    let path: number[] = [], pathP1: number[] = [], pathP2: number[] = [];
    let visitedP1: Set<number> = new Set(), visitedP2: Set<number> = new Set();
    let algo = new Algorithms(currentState.graph());
    let algoType: AlgoType = currentState.algorithm();
    switch (algoType) {
      case AlgoType.aStarSearch:
        [pathP1, visitedP1] = algo.aStar(currentState.startNode(), currentState.bombNode());
        [pathP2, visitedP2] = algo.aStar(currentState.bombNode(), currentState.endNode());
        if (pathP1 !== null && pathP2 !== null)
          path = pathP1.concat(pathP2.slice(1));
        else path = null
        break;
      case AlgoType.breadthFirstSearch:
        [pathP1, visitedP1] = algo.bfs(currentState.startNode(), currentState.bombNode());
        [pathP2, visitedP2] = algo.bfs(currentState.bombNode(), currentState.endNode());
        if (pathP1 !== null && pathP2 !== null)
          path = pathP1.concat(pathP2.slice(1));
        else path = null
        break;
      case AlgoType.bellmanFord:
        [pathP1, visitedP1] = algo.bellmanFord(currentState.startNode(), currentState.bombNode());
        [pathP2, visitedP2] = algo.bellmanFord(currentState.bombNode(), currentState.endNode());
        if (pathP1 !== null && pathP2 !== null)
          path = pathP1.concat(pathP2.slice(1));
        else path = null
        break;
      case AlgoType.dijkstrasSearch:
        [pathP1, visitedP1] = algo.dijkstras(currentState.startNode(), currentState.bombNode());
        [pathP2, visitedP2] = algo.dijkstras(currentState.bombNode(), currentState.endNode());
        if (pathP1 !== null && pathP2 !== null)
          path = pathP1.concat(pathP2.slice(1));
        else path = null
        break;
      case AlgoType.depthFirstSearch:
        [pathP1, visitedP1] = algo.dfs(currentState.startNode(), currentState.bombNode());
        [pathP2, visitedP2] = algo.dfs(currentState.bombNode(), currentState.endNode());
        if (pathP1 !== null && pathP2 !== null)
          path = pathP1.concat(pathP2.slice(1));
        else path = null
        break;
      case AlgoType.bestFirstSearch:
        [pathP1, visitedP1] = algo.bestFirstSearch(currentState.startNode(), currentState.bombNode());
        [pathP2, visitedP2] = algo.bestFirstSearch(currentState.bombNode(), currentState.endNode());
        if (pathP1 !== null && pathP2 !== null)
          path = pathP1.concat(pathP2.slice(1));
        else path = null
    }
    return {
      path,
      visitedP1,
      visitedP2
    }
  }
}