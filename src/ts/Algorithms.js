import { MinPriorityQueue } from "@datastructures-js/priority-queue";
import { AlgoType } from "./Types";
import currentState from "./GlobalState";
import { Queue } from "queue-typescript";
export default class Algorithms {
    graph;
    comparator;
    static EPS = 1e-6;
    constructor(_assignGraph) {
        this.graph = _assignGraph;
        this.comparator = this.graph.comparator;
    }
    bfs(start, end) {
        const visited = new Set();
        const prev = new Map();
        const path = [];
        const Q = new Queue();
        Q.enqueue(start);
        visited.add(start);
        while (Q.length !== 0) {
            let node = this.graph.nodes().get(Q.dequeue());
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
    dfs(start, end) {
        let path = [];
        const visited = new Set();
        const internalDfs = (at) => {
            if (!visited.has(at)) {
                visited.add(at);
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
        let visited = new Set();
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
                        visited.add(edge.dest.getData());
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
        let visited = new Map();
        let src = start;
        let path = [];
        while (src !== end) {
            let node = this.graph.nodes().get(src);
            path.push(src);
            visited.set(src, true);
            src = node.getAdjNodes()[Math.floor(Math.random() * node.getAdjNodes().length)].dest.getData();
        }
        return path;
    }
    biDirectional(start, end) {
        const [pathFromStart] = this.dijkstras(start, end);
        let spliceNode = pathFromStart[pathFromStart.length >> 1];
        let [p1, visitedFromStart] = this.dijkstras(start, spliceNode);
        let [p2, visitedFromEnd] = this.dijkstras(end, spliceNode);
        return [pathFromStart, visitedFromStart, visitedFromEnd];
    }
    internalAStar(start, end) {
        let PQ = new MinPriorityQueue((promisingNode) => promisingNode.minHeuristic);
        let dist = new Map(), prev = new Map();
        let visited = new Set();
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
                    let newHeuristic = newDist + this.graph.distBw(this.graph.nodes().get(destData), endNode) * newDist;
                    if (newDist < dist.get(destData)) {
                        prev.set(destData, label);
                        dist.set(destData, newDist);
                        PQ.enqueue({ label: destData, minDist: newDist, minHeuristic: newHeuristic });
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
        let dist = new Map(), prev = new Map();
        let visited = new Set();
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
            if (label === end)
                return [dist, prev, visited];
        }
        return [dist, prev, visited];
    }
    static runAlgoFromGlobalStateNoBomb() {
        let path = [];
        let algo = new Algorithms(currentState.graph());
        let visitedInOrder = new Set();
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
        //else //something regarding bidirectional search needs to be done.
        return { path, visitedInOrder };
    }
    static runAlgorithmGlobalStateYesBomb() {
        let path = [], pathP1 = [], pathP2 = [];
        let visitedP1 = new Set(), visitedP2 = new Set();
        let algo = new Algorithms(currentState.graph());
        let algoType = currentState.algorithm();
        switch (algoType) {
            case AlgoType.aStarSearch:
                [pathP1, visitedP1] = algo.aStar(currentState.startNode(), currentState.bombNode());
                [pathP2, visitedP2] = algo.aStar(currentState.bombNode(), currentState.endNode());
                path = pathP1.concat(pathP2.slice(1));
                break;
            case AlgoType.breadthFirstSearch:
                [pathP1, visitedP1] = algo.bfs(currentState.startNode(), currentState.bombNode());
                [pathP2, visitedP2] = algo.bfs(currentState.bombNode(), currentState.endNode());
                path = pathP1.concat(pathP2.slice(1));
                break;
            case AlgoType.bellmanFord:
                [pathP1, visitedP1] = algo.bellmanFord(currentState.startNode(), currentState.bombNode());
                [pathP2, visitedP2] = algo.bellmanFord(currentState.bombNode(), currentState.endNode());
                path = pathP1.concat(pathP2.slice(1));
                break;
            case AlgoType.dijkstrasSearch:
                [pathP1, visitedP1] = algo.dijkstras(currentState.startNode(), currentState.bombNode());
                [pathP2, visitedP2] = algo.dijkstras(currentState.bombNode(), currentState.endNode());
                path = pathP1.concat(pathP2.slice(1));
                break;
            case AlgoType.depthFirstSearch:
                [pathP1, visitedP1] = algo.dfs(currentState.startNode(), currentState.bombNode());
                [pathP2, visitedP2] = algo.dfs(currentState.bombNode(), currentState.endNode());
                path = pathP1.concat(pathP2.slice(1));
                break;
        }
        return {
            path,
            visitedP1,
            visitedP2
        };
    }
}
