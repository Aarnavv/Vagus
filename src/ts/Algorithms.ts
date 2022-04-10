import Node from "./Node";
import Graph from './Graph';
import {PriorityQueue} from "@datastructures-js/priority-queue";
import Edge from "./Edge";


class Algorithms<T> {
    graph: Graph<T>;
    comparator;

    constructor(_assignGraph: Graph<T>) {
        this.graph = _assignGraph;
        this.comparator = this.graph.comparator;
    }

    private internalDFS(node: Node<T>, visited: Map<T, boolean>, dfsCollector: Node<T>[]): void {
        if (!node) return;
        visited.set(node.getData(), true);
        dfsCollector.push(node);
        node.getAdjNodes().forEach((edge) => {
            if (!visited.has(edge.dest.getData())) {
                this.internalDFS(edge.dest, visited, dfsCollector);
            }
        });
    }

    dfs(start: T, end: T): Node<T>[] {
        const visited: Map<T, boolean> = new Map();
        const dfsCollector: Node<T>[] = [];
        let finishIndex = this.graph.nodes.get(end);
        if (finishIndex === undefined) return [];
        this.graph.nodes.get(start).getAdjNodes().forEach((edge) => {
            if (!visited.has(edge.dest.getData())) {
                this.internalDFS(edge.dest, visited, dfsCollector);
            }
        });
        let at = dfsCollector.findIndex((node) => {
            return node.getData() === end;
        });
        if (at < 0) return dfsCollector;
        dfsCollector.splice(at + 1);
        return dfsCollector;
    }

    private internalBFS(node: Node<T>, visited: Map<T, boolean>, bfsCollector: Node<T>[]): void {
        const Q: Node<T>[] = []
        if (!node) return;
        Q.push(node);
        let pointer = 0;
        visited.set(node.getData(), true);
        while (pointer !== Q.length) {
            node = Q[pointer++];
            if (node === null) continue;
            bfsCollector.push(node);
            node.getAdjNodes().forEach((item) => {
                if (!visited.has(item.dest.getData())) {
                    visited.set(item.dest.getData(), true);
                    Q.push(item.dest);
                }
            });
        }
    }

    bfs(start: T, end: T): Node<T>[] {
        const visited: Map<T, boolean> = new Map();
        const bfsCollector: Node<T>[] = [];
        let finishIndex = this.graph.nodes.get(end);
        if (finishIndex === undefined) return [];
        this.graph.nodes.get(start).getAdjNodes().forEach((edge) => {
            if (!visited.has(edge.dest.getData())) {
                this.internalBFS(edge.dest, visited, bfsCollector);
            }
        });
        let at = bfsCollector.findIndex((node) => {
            return node.getData() === end;
        });
        if (at < 0) return bfsCollector;
        bfsCollector.splice(at + 1);
        return bfsCollector;
    }

    dijkstras(start: T, end: T):[T[] ,Map<T,number> , Map<T , T>]{
        const [dist, prev] = this.internalDijkstras(start, end);
        // the rest is just finding the path to use.
        let path: T[] = [];
        if (dist.get(end) === Infinity) return [path, dist, prev];
        for (let at: T = end; at !== undefined; at = prev.get(at)) path.unshift(at);
        return [path, dist, prev];
    }

    aStar(start: T, end: T):[T[] ,Map<T,number> , Map<T , T>]{
        const [dist, prev] = this.internalAStar(start, end);
        // this is just to reconstruct the path for a*;
        let path: T [] = [];
        if (dist.get(end) === Infinity) return [path, dist, prev];
        for (let at: T = end; at !== undefined; at = prev.get(at)) path.unshift(at);
        return [path, dist, prev];
    }

    private internalAStar(start: T, end: T): [Map<T, number>, Map<T, T>] {
        let dist: Map<T, number> = new Map();
        let visited: Map<T, boolean> = new Map();
        let prev: Map<T, T> = new Map();
        this.graph.nodes.forEach((node) => {
            node.getData() !== start ? dist.set(node.getData(), Infinity) : dist.set(start, 0);
        });
        let finish = this.graph.nodes.get(end);
        let PQ = new PriorityQueue<{ label: T, heuristic: number }>((_this, _that) => {
            return _this.heuristic < _that.heuristic ? -1 : _this.heuristic === _that.heuristic ? 0 : 1;
        });
        PQ.enqueue({label: start, heuristic: 0});
        while (!PQ.isEmpty()) {
            const {label, heuristic} = PQ.dequeue();
            visited.set(label, true);
            if (dist.get(label) < heuristic)
                continue;
            this.graph.nodes.get(label).getAdjNodes().forEach((edge) => {
                const dest = edge.dest.getData();
                if (!visited.has(dest)) {
                    //the below thing is the heuristic, it give 80% weight to distance and 20% weight to cost.
                    let newHeuristic = dist.get(label) + (0.8 * this.graph.distBw(this.graph.nodes.get(edge.dest.getData()), finish) + 0.2 * edge.cost);
                    if (newHeuristic < dist.get(dest)) {
                        prev.set(dest, label);
                        dist.set(dest, newHeuristic);
                        PQ.enqueue({label: dest, heuristic: newHeuristic})
                    }
                }
            })
            if (label === end) return [dist, prev];
        }
        return [dist, prev];
    }

    bellmanFord(start :T , end :T ):[T[] , Map<T, number > , Map<T,T >]{
        const [dist , prev] = this.internalBellmanFord(start , end);
        console.log(prev);
        let path:T[] = [];
        if(dist.get(end)===Infinity) return [path , dist , prev];
        for(let at = end ; at !==undefined ; at=prev.get(at)) path.unshift(at);
        return [path , dist , prev];
    }

    private internalBellmanFord(start :T , end : T):[Map<T , number> , Map<T, T>]{
        let dist:Map<T , number> = new Map();
        let edgeList:Map<T, Edge<T>[]> = new Map();
        let prev:Map<T , T> = new Map();
        this.graph.nodes.forEach((node)=>{
            node.getData() !==start ? dist.set(node.getData () , Infinity) : dist.set(start , 0);
            edgeList.set(node.getData() , node.getAdjNodes());
        });
        const V= this.graph.nodes.size;
        for(let v = 0; v < V -1 ; v ++ ) {
            this.graph.nodes.forEach((node) => {
                node.getAdjNodes().forEach((edge) => {
                    if (dist.get(node.getData()) + edge.cost < dist.get(edge.dest.getData())) {
                        dist.set(edge.dest.getData(), (dist.get(node.getData()) + edge.cost));
                        prev.set(edge.dest.getData() , node.getData());
                    }
                })
            })
        }
        return [dist , prev];

    }

    internalDijkstras(start: T, end: T): [Map<T, number>, Map<T, T>] {
        let dist: Map<T, number> = new Map();
        let visited: Map<T, boolean> = new Map();
        let prev: Map<T, T> = new Map();
        this.graph.nodes.forEach((node) => {
            node.getData() !== start ? dist.set(node.getData(), Infinity) : dist.set(start, 0);
        });
        let PQ = new PriorityQueue<{ label: T, minDist: number }>((a, b) => {
            return a.minDist < b.minDist ? -1 : a.minDist === b.minDist ? 0 : 1;
        });
        PQ.enqueue({label: start, minDist: 0});
        while (!PQ.isEmpty()) {
            const {label, minDist} = PQ.dequeue();
            visited.set(label, true);
            if (dist.get(label) < minDist)
                continue;
            this.graph.nodes.get(label).getAdjNodes().forEach((edge) => {
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

const graph = new Graph<number>((a, b): number => {
    return a === b ? 0 : a < b ? -1 : 1;
});

graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);
graph.addNode(6);
graph.addEdge(1 , 2 , 2);
graph.addEdge(1 , 3 , 3);
graph.addEdge(2, 4 , 7);
graph.addEdge(3 , 2 , 1);
graph.addEdge(3 , 5 , 3);
graph.addEdge(4 , 6, 1);
graph.addEdge(5 , 4 , 2);
graph.addEdge(5 , 6 , 5);

const algo = new Algorithms<number>(graph);
console.log(algo.bellmanFord(1, 6)[0]);
