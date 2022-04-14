import Graph from './Graph';
import {MinPriorityQueue, PriorityQueue} from "@datastructures-js/priority-queue";
import Edge from "./Edge";


export class Algorithms<T> {
    graph: Graph<T>;
    comparator;

    constructor(_assignGraph: Graph<T>) {
        this.graph = _assignGraph;
        this.comparator = this.graph.comparator;
    }

    bfs(start: T, end: T): [T[], Map<T, boolean>, Map<T, T>] {
        const visited: Map<T, boolean> = new Map();
        const prev: Map<T, T> = new Map();
        const path: T[] = [];
        if (this.graph.nodes().get(start) === undefined) return [path, visited, prev];
        const Q = new PriorityQueue<T>(() => {
            return 0
        });
        Q.enqueue(start);
        visited.set(start, true);
        while (!Q.isEmpty()) {
            let currNode = this.graph.nodes().get(Q.dequeue());
            currNode.getAdjNodes().forEach((edge) => {
                if (!visited.has(edge.dest.getData())) {
                    visited.set(edge.dest.getData(), true);
                    Q.enqueue(edge.dest.getData());
                    prev.set(edge.dest.getData(), currNode.getData());
                }
            })
            if (currNode.getData() === end) {
                for (let at = end; at !== undefined; at = prev.get(at)) path.unshift(at);
                return [path, visited, prev];

            }
        }
        return [path, visited, prev];
    }

    dfs(start: T, end: T): [boolean, Map<T, boolean>, T[]] {
        let isCyclic: boolean = false;
        let path: T[] = [];
        const visited: Map<T, boolean> = new Map();
        const internalDfs = (at: T) => {
            if (visited.has(at)) {
                isCyclic = true;
                return;
            }
            visited.set(at, true);
            path.push(at);
            this.graph.nodes().get(at).getAdjNodes().forEach((edge) => {
                internalDfs(edge.dest.getData());
            });
        }
        internalDfs(start);
        const endIndex = path.indexOf(end);
        if (endIndex < 0) return [isCyclic, visited, path];
        else {
            path.splice(endIndex + 1)
            return [isCyclic, visited, path];
        }
    }

    dijkstras(start: T, end: T): [T[], Map<T, number>, Map<T, T>] {
        const [dist, prev] = this.internalDijkstras(start, end);
        // the rest is just finding the path to use.
        let path: T[] = [];
        if (dist.get(end) === Infinity) return [path, dist, prev];
        for (let at: T = end; at !== undefined; at = prev.get(at)) path.unshift(at);
        return [path, dist, prev];
    }

    aStar(start: T, end: T): [T[], Map<T, number>, Map<T, T>] {
        const [dist, prev] = this.internalAStar(start, end);
        // this is just to reconstruct the path for a*;
        let path: T[] = [];
        if (dist.get(end) === Infinity) return [path, dist, prev];
        for (let at: T = end; at !== undefined; at = prev.get(at)) path.unshift(at);
        return [path, dist, prev];
    }

    bellmanFord(start: T, end: T): [T[], Map<T, number>, Map<T, T>] {
        const [dist, prev] = this.internalBellmanFord(start);
        console.log(prev);
        let path: T[] = [];
        if (dist.get(end) === Infinity) return [path, dist, prev];
        for (let at = end; at !== undefined; at = prev.get(at)) path.unshift(at);
        return [path, dist, prev];
    }

    internalBellmanFord(start: T): [Map<T, number>, Map<T, T>] {
        let dist: Map<T, number> = new Map();
        let edgeList: Map<T, Edge<T>[]> = new Map();
        let prev: Map<T, T> = new Map();
        this.graph.nodes().forEach((node) => {
            node.getData() !== start ? dist.set(node.getData(), Infinity) : dist.set(start, 0);
            edgeList.set(node.getData(), node.getAdjNodes());
        });
        const V = this.graph.nodes().size;
        for (let v = 0; v < V - 1; v++) {
            this.graph.nodes().forEach((node) => {
                node.getAdjNodes().forEach((edge) => {
                    if (dist.get(node.getData()) + edge.cost < dist.get(edge.dest.getData())) {
                        dist.set(edge.dest.getData(), (dist.get(node.getData()) + edge.cost));
                        prev.set(edge.dest.getData(), node.getData());
                    }
                })
            })
        }
        return [dist, prev];
    }

    randomWalk(start: T, end: T): T[] {
        let src: T = start;
        let path: T[] = [];
        while (true) {
            let node = this.graph.nodes().get(src);
            path.push(src);
            if (src === end) return path;
            src = node.getAdjNodes()[Math.floor(Math.random() * node.getAdjNodes().length)].dest.getData();
        }
    }

    biDirectional(start: T, end: T) {
        const [pathFromStart, visitedFromStart] = this.bfs(start, end);
        const [pathFromEnd, visitedFromEnd] = this.bfs(end, start);
        let splicePoint = pathFromEnd.length / 2;
        let visitedFromStartArray = Array.from(visitedFromStart.keys());
        let visitedFromEndArray = Array.from(visitedFromEnd.keys());
        visitedFromStartArray.splice(splicePoint + 1);
        visitedFromEndArray.splice(splicePoint + 1);
        return [pathFromStart, visitedFromStartArray, visitedFromEndArray];

    }

    // i will have to sort out aStar, change the heuristic.
    private internalAStar(start: T, end: T): [Map<T, number>, Map<T, T>] {
        let dist: Map<T, number> = new Map();
        let visited: Map<T, boolean> = new Map();
        let prev: Map<T, T> = new Map();
        this.graph.nodes().forEach((node) => {
            node.getData() !== start ? dist.set(node.getData(), Infinity) : dist.set(start, 0);
        });
        let finish = this.graph.nodes().get(end);
        let PQ = new MinPriorityQueue<{ label: T, heuristicCost: number }>((promisingNode) => promisingNode.heuristicCost);
        PQ.enqueue({label: start, heuristicCost: 0});
        while (!PQ.isEmpty()) {
            const {label, heuristicCost} = PQ.dequeue();
            visited.set(label, true);
            if (dist.get(label) < heuristicCost)
                continue;
            this.graph.nodes().get(label).getAdjNodes().forEach((edge) => {
                const dest = edge.dest.getData();
                if (!visited.has(dest)) {
                    //general travelCost which is used for decision to update dest.
                    let cost = dist.get(label) + edge.cost;
                    //general travelCost which is used for decision to update dest.
                    let euclideanDist = this.graph.distBw(this.graph.nodes().get(edge.dest.getData()), finish);
                    let heuristic = euclideanDist + cost;
                    if (cost < dist.get(dest)) {
                        prev.set(dest, label);
                        dist.set(dest, cost);
                        PQ.enqueue({label: dest, heuristicCost: heuristic})
                    }
                }
            })
            if (label === end) return [dist, prev];
        }
        return [dist, prev];
    }

    private internalDijkstras(start: T, end: T): [Map<T, number>, Map<T, T>] {
        let PQ = new MinPriorityQueue<{ label: T, minDist: number }>((promisingNode) => promisingNode.minDist);
        let dist: Map<T, number> = new Map();
        let visited: Map<T, boolean> = new Map();
        let prev: Map<T, T> = new Map();
        this.graph.nodes().forEach((node) => {
            node.getData() !== start ? dist.set(node.getData(), Infinity) : dist.set(start, 0);
        });
        PQ.enqueue({label: start, minDist: 0});
        while (!PQ.isEmpty()) {
            const {label, minDist} = PQ.dequeue();
            visited.set(label, true);
            if (dist.get(label) < minDist)
                continue;
            this.graph.nodes().get(label).getAdjNodes().forEach((edge) => {
                const dest = edge.dest.getData();
                if (!visited.has(dest)) {
                    let newDist = dist.get(label) + edge.cost;
                    if (newDist < dist.get(dest)) {
                        prev.set(dest, label);
                        dist.set(dest, newDist);
                        PQ.enqueue({label: dest, minDist: newDist});
                    }
                }
            });
            if (label === end) return [dist, prev];
        }
        return [dist, prev];
    }
}
