import { MinPriorityQueue } from "@datastructures-js/priority-queue";
import { AlgoType } from "./Types";
import currentState from "./GlobalState";
import { Queue } from "queue-typescript";
/**
 * Main backbone of the whole backend.
 * This class contains the various algorithms which are required to
 * give their outputs so as to visualise.
 *
 * @author aditya , <adityavikramsinha19@gmail.com>
 */
export default class Algorithms {
    // the graph which the algorithms
    // get to work with
    graph;
    // comparator
    comparator;
    // Epsilon to weight the aStar algorithm.
    static EPS;
    /**
     * Constructs an Algorithm instance with the comparator as
     * the comparator of the graph input to the _assignGraph parameter.
     * EPS[Epsilon weightage] is also put to 10^-5.
     *
     * @param _assignGraph the graph on which the algorithms
     * will work
     */
    constructor(_assignGraph) {
        this.graph = _assignGraph;
        this.comparator = this.graph.comparator;
        Algorithms.EPS = 1e-5;
    }
    /**
     * Classic Breadth-first search algorithm which
     * is unweighted.
     *
     * @param start the starting ID on the graph
     * @param end the end ID on the graph
     * @returns an array containing the path | null [path is given if it is found, else null] and a Set of
     * visited nodes inorder while trying to find the path.
     */
    bfs(start, end) {
        // first initialise all the variables
        // visited is the nodes that are visited in the process
        // prev is to keep track of the path
        // path is the actual path
        // Q is a queue which performs the FIFO operation
        const visited = new Set();
        const prev = new Map();
        const path = [];
        const Q = new Queue();
        // Enqueue the first one
        Q.enqueue(start);
        // While the length of the Queue is not 0
        // We keep on going.
        while (Q.length !== 0) {
            // We first get the present node instance from the graph.
            let node = this.graph.nodes().get(Q.dequeue());
            // then we add that node to visited.
            visited.add(node.getData());
            // if the nodes data is the same as end id,
            // we know we have reached a path
            // therfore we just give it out as is and
            // stop the function
            if (node.getData() === end) {
                // construct the path
                for (let at = end; at !== undefined; at = prev.get(at))
                    path.unshift(at);
                // return path and visited inorder
                return [path, visited];
            }
            // if end has not been found
            // we keep going over all the neighbours of this noe
            // in order
            // this is the reason it is called breadth-first-search
            // we keep opening all the neighbours, gives the search
            // a cyclic effect.
            node.getAdjNodes().forEach((edge) => {
                // if we have already visited it, we do not need to
                // because it means that it is already added to the visited section
                // and was a part of the queue.
                if (!visited.has(edge.dest.getData())) {
                    // added it to visited.
                    visited.add(edge.dest.getData());
                    // set prev
                    prev.set(edge.dest.getData(), node.getData());
                    // add it to the queue since this means that
                    // we have to open this node again smtime later.
                    Q.enqueue(edge.dest.getData());
                }
            });
        }
        // if the code has reached here then
        // we can safely assume that end was not a
        // neighbour of any node
        // thus, no path should exist
        // hence, we return null and just visited set
        return [null, visited];
    }
    /**
     * Classic DFS which uses an internal function
     * to do recursion
     *
     * @param start starting id of the path
     * @param end ending id of the path
     * @returns a path | null [path if found, else null] and a inorder Set of visited nodes.
     */
    dfs(start, end) {
        // path is for the path to be returned
        // visited is for the Set of visited nodes in order
        // prev is to construct a path.
        const path = [];
        const visited = new Set();
        const prev = new Map();
        /**
         * Internal function which recurses again and again,
         * thus helping in DFS.
         * This modifies the parent level variables and hence,
         * has no return
         *
         * @param at the present node id for iteration
         */
        const internalDfs = (at, parent) => {
            // First check if visited has this or not
            // because if it does then it means that
            // we have already opened this node and explored
            // it in-depth.
            if (!visited.has(at)) {
                // add the node if not visited
                visited.add(at);
                // setting prev for the path stuff
                prev.set(at, parent);
                // if not found then keep opening
                // descendent
                if (at !== end) {
                    this.graph.nodes().get(at).getAdjNodes().forEach((edge) => {
                        internalDfs(edge.dest.getData(), at);
                    });
                }
                // if found then we just construct the path
                // and leave
                else {
                    // reconstruct path from the given prev Set
                    for (let at = end; at !== undefined; at = prev.get(at))
                        path.unshift(at);
                    return;
                }
            }
        };
        // call function once to start
        // with undefined as starts "ancestor"
        // this may help in reconstructing path
        internalDfs(start, undefined);
        // just do a simple ternary
        // to check for length
        // if length ge 1, we know that there is a route
        // else not
        return [(path.length > 0 ? path : null), visited];
    }
    dijkstras(start, end) {
        const [dist, prev, visited] = this.internalDijkstras(start, end);
        // the rest is just finding the path to use.
        let path = [];
        if (dist.get(end) === Infinity)
            return [null, visited];
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
        if (pathFromStart === null) {
            let visitedFromStart = this.dijkstras(start, end)[1];
            let visitedFromEnd = this.dijkstras(end, start)[1];
            return [pathFromStart, visitedFromStart, visitedFromEnd];
        }
        let spliceNode = pathFromStart[pathFromStart.length >> 1];
        let visitedFromStart = this.dijkstras(start, spliceNode)[1];
        let visitedFromEnd = this.dijkstras(end, spliceNode)[1];
        return [pathFromStart, visitedFromStart, visitedFromEnd];
    }
    bestFirstSearch(start, end) {
        let [prev, visited] = this.internalBestFirstSearch(start, end);
        if (prev === null)
            return [null, visited];
        let path = [];
        for (let at = end; at !== undefined; at = prev.get(at))
            path.unshift(at);
        return [path, visited];
    }
    internalBestFirstSearch(start, end) {
        let PQ = new MinPriorityQueue((promisingNode) => promisingNode.minHeuristic);
        let prev = new Map();
        let visited = new Set();
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
            if (label === end)
                return [prev, visited];
        }
        return [null, visited];
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
                    let newHeuristic = (this.graph.distBw(this.graph.nodes().get(destData), endNode, 'e')) / 1000000 * newDist;
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
        else if (algoType === AlgoType.bestFirstSearch) {
            [path, visitedInOrder] = algo.bestFirstSearch(currentState.startNode(), currentState.endNode());
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
                if (pathP1 !== null && pathP2 !== null)
                    path = pathP1.concat(pathP2.slice(1));
                else
                    path = null;
                break;
            case AlgoType.breadthFirstSearch:
                [pathP1, visitedP1] = algo.bfs(currentState.startNode(), currentState.bombNode());
                [pathP2, visitedP2] = algo.bfs(currentState.bombNode(), currentState.endNode());
                if (pathP1 !== null && pathP2 !== null)
                    path = pathP1.concat(pathP2.slice(1));
                else
                    path = null;
                break;
            case AlgoType.bellmanFord:
                [pathP1, visitedP1] = algo.bellmanFord(currentState.startNode(), currentState.bombNode());
                [pathP2, visitedP2] = algo.bellmanFord(currentState.bombNode(), currentState.endNode());
                if (pathP1 !== null && pathP2 !== null)
                    path = pathP1.concat(pathP2.slice(1));
                else
                    path = null;
                break;
            case AlgoType.dijkstrasSearch:
                [pathP1, visitedP1] = algo.dijkstras(currentState.startNode(), currentState.bombNode());
                [pathP2, visitedP2] = algo.dijkstras(currentState.bombNode(), currentState.endNode());
                if (pathP1 !== null && pathP2 !== null)
                    path = pathP1.concat(pathP2.slice(1));
                else
                    path = null;
                break;
            case AlgoType.depthFirstSearch:
                [pathP1, visitedP1] = algo.dfs(currentState.startNode(), currentState.bombNode());
                [pathP2, visitedP2] = algo.dfs(currentState.bombNode(), currentState.endNode());
                if (pathP1 !== null && pathP2 !== null)
                    path = pathP1.concat(pathP2.slice(1));
                else
                    path = null;
                break;
            case AlgoType.bestFirstSearch:
                [pathP1, visitedP1] = algo.bestFirstSearch(currentState.startNode(), currentState.bombNode());
                [pathP2, visitedP2] = algo.bestFirstSearch(currentState.bombNode(), currentState.endNode());
                if (pathP1 !== null && pathP2 !== null)
                    path = pathP1.concat(pathP2.slice(1));
                else
                    path = null;
                break;
            default:
                console.error("Internal error, the algorithm selected does not match with the algorithms possible");
        }
        return {
            path,
            visitedP1,
            visitedP2
        };
    }
}
