import Graph from './Graph';
import { PriorityQueue } from "@datastructures-js/priority-queue";
class Algorithms {
    graph;
    comparator;
    constructor(_assignGraph) {
        this.graph = _assignGraph;
        this.comparator = this.graph.comparator;
    }
    internalDFS(node, visited, dfsCollector) {
        if (!node)
            return;
        visited.set(node.getData(), true);
        dfsCollector.push(node);
        node.getAdjNodes().forEach((edge) => {
            if (!visited.has(edge.dest.getData())) {
                this.internalDFS(edge.dest, visited, dfsCollector);
            }
        });
    }
    dfs(start, end) {
        const visited = new Map();
        const dfsCollector = [];
        let finishIndex = this.graph.nodes.get(end);
        if (finishIndex === undefined)
            return [];
        this.graph.nodes.get(start).getAdjNodes().forEach((edge) => {
            if (!visited.has(edge.dest.getData())) {
                this.internalDFS(edge.dest, visited, dfsCollector);
            }
        });
        let at = dfsCollector.findIndex((node) => {
            return node.getData() === end;
        });
        if (at < 0)
            return dfsCollector;
        dfsCollector.splice(at + 1);
        return dfsCollector;
    }
    internalBFS(node, visited, bfsCollector) {
        const Q = [];
        if (!node)
            return;
        Q.push(node);
        let pointer = 0;
        visited.set(node.getData(), true);
        while (pointer !== Q.length) {
            node = Q[pointer++];
            if (node === null)
                continue;
            bfsCollector.push(node);
            node.getAdjNodes().forEach((item) => {
                if (!visited.has(item.dest.getData())) {
                    visited.set(item.dest.getData(), true);
                    Q.push(item.dest);
                }
            });
        }
    }
    bfs(start, end) {
        const visited = new Map();
        const bfsCollector = [];
        let finishIndex = this.graph.nodes.get(end);
        if (finishIndex === undefined)
            return [];
        this.graph.nodes.get(start).getAdjNodes().forEach((edge) => {
            if (!visited.has(edge.dest.getData())) {
                this.internalBFS(edge.dest, visited, bfsCollector);
            }
        });
        let at = bfsCollector.findIndex((node) => {
            return node.getData() === end;
        });
        if (at < 0)
            return bfsCollector;
        bfsCollector.splice(at + 1);
        return bfsCollector;
    }
    dijkstras(start, end) {
        const [dist, prev] = this.internalDijkstras(start, end);
        // the rest is just finding the path to use.
        let path = [];
        if (dist.get(end) === Infinity)
            return [path, dist, prev];
        for (let at = end; at !== undefined; at = prev.get(at))
            path.unshift(at);
        return [path, dist, prev];
    }
    aStar(start, end) {
        const [dist, prev] = this.internalAStar(start, end);
        // this is just to reconstruct the path for a*;
        let path = [];
        if (dist.get(end) === Infinity)
            return [path, dist, prev];
        for (let at = end; at !== undefined; at = prev.get(at))
            path.unshift(at);
        return [path, dist, prev];
    }
    internalAStar(start, end) {
        let dist = new Map();
        let visited = new Map();
        let prev = new Map();
        this.graph.nodes.forEach((node) => {
            node.getData() !== start ? dist.set(node.getData(), Infinity) : dist.set(start, 0);
        });
        let finish = this.graph.nodes.get(end);
        let PQ = new PriorityQueue((_this, _that) => {
            return _this.heuristic < _that.heuristic ? -1 : _this.heuristic === _that.heuristic ? 0 : 1;
        });
        PQ.enqueue({ label: start, heuristic: 0 });
        while (!PQ.isEmpty()) {
            const { label, heuristic } = PQ.dequeue();
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
                        PQ.enqueue({ label: dest, heuristic: newHeuristic });
                    }
                }
            });
            if (label === end)
                return [dist, prev];
        }
        return [dist, prev];
    }
    bellmanFord(start, end) {
        const [dist, prev] = this.internalBellmanFord(start, end);
        console.log(prev);
        let path = [];
        if (dist.get(end) === Infinity)
            return [path, dist, prev];
        for (let at = end; at !== undefined; at = prev.get(at))
            path.unshift(at);
        return [path, dist, prev];
    }
    internalBellmanFord(start, end) {
        let dist = new Map();
        let edgeList = new Map();
        let prev = new Map();
        this.graph.nodes.forEach((node) => {
            node.getData() !== start ? dist.set(node.getData(), Infinity) : dist.set(start, 0);
            edgeList.set(node.getData(), node.getAdjNodes());
        });
        const V = this.graph.nodes.size;
        for (let v = 0; v < V - 1; v++) {
            this.graph.nodes.forEach((node) => {
                node.getAdjNodes().forEach((edge) => {
                    if (dist.get(node.getData()) + edge.cost < dist.get(edge.dest.getData())) {
                        dist.set(edge.dest.getData(), (dist.get(node.getData()) + edge.cost));
                        prev.set(edge.dest.getData(), node.getData());
                    }
                });
            });
        }
        return [dist, prev];
    }
    internalDijkstras(start, end) {
        let dist = new Map();
        let visited = new Map();
        let prev = new Map();
        this.graph.nodes.forEach((node) => {
            node.getData() !== start ? dist.set(node.getData(), Infinity) : dist.set(start, 0);
        });
        let PQ = new PriorityQueue((a, b) => {
            return a.minDist < b.minDist ? -1 : a.minDist === b.minDist ? 0 : 1;
        });
        PQ.enqueue({ label: start, minDist: 0 });
        while (!PQ.isEmpty()) {
            const { label, minDist } = PQ.dequeue();
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
                        PQ.enqueue({ label: dest, minDist: newDist });
                    }
                }
            });
            if (label === end)
                return [dist, prev];
        }
        return [dist, prev];
    }
    randomWalk(start, end) {
        let src = start;
        let path = [];
        while (true) {
            let node = this.graph.nodes.get(src);
            path.push(src);
            if (src === end)
                return path;
            src = node.getAdjNodes()[Math.floor(Math.random() * node.getAdjNodes().length)].dest.getData();
        }
    }
    //i will have to sit down and fine tune BFS and DFS
    biDirectional(start, end) {
        return [this.bfs(start, end), this.bfs(end, start)];
    }
}
const graph = new Graph((a, b) => {
    return a === b ? 0 : a < b ? -1 : 1;
});
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);
graph.addNode(6);
graph.addEdge(1, 2, 2);
graph.addEdge(1, 3, 3);
graph.addEdge(2, 4, 7);
graph.addEdge(3, 2, 1);
graph.addEdge(3, 5, 3);
graph.addEdge(4, 6, 1);
graph.addEdge(5, 4, 2);
graph.addEdge(5, 6, 5);
const algo = new Algorithms(graph);
algo.biDirectional(1, 6)[0].forEach((node) => console.log(node.getData()));
console.log("=================================");
algo.biDirectional(1, 6)[1].forEach((node) => console.log(node.getData()));
