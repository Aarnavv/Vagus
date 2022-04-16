import { MinPriorityQueue } from "@datastructures-js/priority-queue";
import { AlgoType } from "./Types";
import currentState from "./GlobalState";
import { Queue } from "queue-typescript";
export default class Algorithms {
    graph;
    comparator;
    constructor(_assignGraph) {
        this.graph = _assignGraph;
        this.comparator = this.graph.comparator;
    }
    bfs(start, end) {
        const visited = new Map();
        const prev = new Map();
        const path = [];
        const Q = new Queue();
        Q.enqueue(start);
        visited.set(start, true);
        while (Q.length !== 0) {
            let node = this.graph.nodes().get(Q.dequeue());
            visited.set(node.getData(), true);
            node.getAdjNodes().forEach((edge) => {
                if (!visited.has(edge.dest.getData())) {
                    visited.set(edge.dest.getData(), true);
                    prev.set(edge.dest.getData(), node.getData());
                    Q.enqueue(edge.dest.getData());
                }
            });
            if (node.getData() === end) {
                for (let at = end; at !== undefined; at = prev.get(at))
                    path.unshift(at);
                return [path, visited];
            }
        }
        return [null, visited];
    }
    dfs(start, end) {
        let path = [];
        const visited = new Map();
        const internalDfs = (at) => {
            if (!visited.has(at)) {
                visited.set(at, true);
                path.push(at);
                if (at === end)
                    return;
                this.graph.nodes().get(at).getAdjNodes().forEach((edge) => {
                    internalDfs(edge.dest.getData());
                });
            }
        };
        internalDfs(start);
        const endIndex = path.indexOf(end);
        if (endIndex < 0)
            return [null, visited];
        else {
            path.splice(endIndex + 1);
            return [path, visited];
        }
    }
    dijkstras(start, end) {
        const [dist, prev, visited] = this.internalDijkstras(start, end);
        // the rest is just finding the path to use.
        let path = [];
        if (dist.get(end) === Infinity)
            return [path, visited];
        for (let at = end; at !== undefined; at = prev.get(at))
            path.unshift(at);
        return [path, visited];
    }
    aStar(start, end) {
        const [dist, prev, visited] = this.internalAStar(start, end);
        // this is just to reconstruct the path for a*;
        let path = [];
        if (dist.get(end) === Infinity)
            return [null, visited];
        for (let at = end; at !== undefined; at = prev.get(at))
            path.unshift(at);
        return [path, visited];
    }
    bellmanFord(start, end) {
        const [dist, prev, visited] = this.internalBellmanFord(start);
        let path = [];
        if (dist.get(end) === Infinity)
            return [null, visited];
        for (let at = end; at !== undefined; at = prev.get(at))
            path.unshift(at);
        return [path, visited];
    }
    internalBellmanFord(start) {
        let dist = new Map();
        let edgeList = new Map();
        let visited = new Map();
        let prev = new Map();
        this.graph.nodes().forEach((node) => {
            node.getData() !== start ? dist.set(node.getData(), Infinity) : dist.set(start, 0);
            edgeList.set(node.getData(), node.getAdjNodes());
        });
        const V = this.graph.nodes().size;
        for (let v = 0; v < V - 1; v++) {
            this.graph.nodes().forEach((node) => {
                node.getAdjNodes().forEach((edge) => {
                    if (!visited.has(edge.dest.getData()))
                        visited.set(edge.dest.getData(), true);
                    if (dist.get(node.getData()) + edge.cost < dist.get(edge.dest.getData())) {
                        dist.set(edge.dest.getData(), dist.get(node.getData()) + edge.cost);
                        prev.set(edge.dest.getData(), node.getData());
                    }
                });
            });
        }
        return [dist, prev, visited];
    }
    randomWalk(start, end) {
        let src = start;
        let path = [];
        while (true) {
            let node = this.graph.nodes().get(src);
            path.push(src);
            if (src === end)
                return path;
            src = node.getAdjNodes()[Math.floor(Math.random() * node.getAdjNodes().length)].dest.getData();
        }
    }
    biDirectional(start, end) {
        const [pathFromStart, visitedFromStart] = this.bfs(start, end);
        const [pathFromEnd, visitedFromEnd] = this.bfs(end, start);
        const visited = new Map();
        let splicePoint = pathFromEnd.length / 2;
        let visitedFromStartArray = Array.from(visitedFromStart.keys());
        let visitedFromEndArray = Array.from(visitedFromEnd.keys());
        visitedFromStartArray.splice(splicePoint + 1);
        visitedFromEndArray.splice(splicePoint + 1);
        return [pathFromStart, visitedFromStartArray, visitedFromEndArray];
    }
    // i will have to sort out aStar, change the heuristic.
    internalAStar(start, end) {
        let dist = new Map();
        let visited = new Map();
        let prev = new Map();
        this.graph.nodes().forEach((node) => {
            node.getData() !== start ? dist.set(node.getData(), Infinity) : dist.set(start, 0);
        });
        let finish = this.graph.nodes().get(end);
        let PQ = new MinPriorityQueue((promisingNode) => promisingNode.G);
        PQ.enqueue({ label: start, H: this.graph.distBw(this.graph.nodes().get(start), this.graph.nodes().get(end)), G: 0 });
        while (!PQ.isEmpty()) {
            const { label, H, G } = PQ.dequeue();
            visited.set(label, true);
            if (dist.get(label) < G)
                continue;
            this.graph.nodes().get(label).getAdjNodes().forEach((edge) => {
                const dest = edge.dest.getData();
                if (!visited.has(dest)) {
                    //general travelCost which is used for decision to update dest.
                    let g = dist.get(label) + edge.cost;
                    //general travelCost which is used for decision to update dest.
                    let h = this.graph.distBw(this.graph.nodes().get(edge.dest.getData()), finish);
                    if (g < dist.get(dest)) {
                        prev.set(dest, label);
                        dist.set(dest, g);
                        PQ.enqueue({ label: dest, H: h, G: g });
                    }
                }
            });
            if (label === end)
                return [dist, prev, visited];
        }
        return [dist, prev, visited];
    }
    internalDijkstras(start, end) {
        let PQ = new MinPriorityQueue((promisingNode) => promisingNode.minDist);
        let dist = new Map();
        let visited = new Map();
        let prev = new Map();
        this.graph.nodes().forEach((node) => {
            node.getData() !== start ? dist.set(node.getData(), Infinity) : dist.set(start, 0);
        });
        PQ.enqueue({ label: start, minDist: 0 });
        while (!PQ.isEmpty()) {
            const { label, minDist } = PQ.dequeue();
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
                        PQ.enqueue({ label: dest, minDist: newDist });
                    }
                }
            });
            if (label === end)
                return [dist, prev, visited];
        }
        return [dist, prev, visited];
    }
    static runAlgoFromGlobalStateNoBomb() {
        let path = [];
        let algo = new Algorithms(currentState.graph());
        let visitedInOrder = new Map();
        let algoType = currentState.algorithm();
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
        //else //something regarding bi-directional search needs to be done.
        return { path, visitedInOrder };
    }
    static runAlgorithmGlobalStateYesBomb() {
        //implementation is left.
    }
}
