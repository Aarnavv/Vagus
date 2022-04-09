import Node from "./Node";
import Graph from './Graph';
import {AlgoType} from "./Types";


class Algorithms<T>{
    graph:Graph<T>;
    comparator;
    constructor(_assignGraph:Graph<T>){
        this.graph=_assignGraph;
        this.comparator=this.graph.comparator;
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

    dfs(start: T , end:T):Node<T>[]{
        const visited: Map<T, boolean> = new Map();
        const dfsCollector: Node<T>[] = [];
        let finishIndex=this.graph.nodes.get(end);
        if(finishIndex===undefined) return[];
        this.graph.nodes.get(start).getAdjNodes().forEach((edge) => {
            if (!visited.has(edge.dest.getData())) {
                this.internalDFS(edge.dest, visited, dfsCollector);
            }
        });
        let at=dfsCollector.findIndex((node)=>{return node.getData()===end;});
        if(at<0) return dfsCollector;
        dfsCollector.splice(at+1);
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

    bfs(start: T , end: T): Node<T>[] {
        const visited: Map<T, boolean> = new Map();
        const bfsCollector: Node<T>[] = [];
        let finishIndex=this.graph.nodes.get(end);
        if(finishIndex===undefined) return[];
        this.graph.nodes.get(start).getAdjNodes().forEach((edge) => {
            if (!visited.has(edge.dest.getData())) {
                this.internalBFS(edge.dest, visited, bfsCollector);
            }
        });
        let at=bfsCollector.findIndex((node)=>{return node.getData()===end;});
        if(at<0) return bfsCollector;
        bfsCollector.splice(at+1);
        return bfsCollector;
    }
}

const graph = new Graph<number>((a, b): number => {
    return a === b ? 0 : a < b? -1 :1 ;
});
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);
graph.addNode(6);
graph.addNode(7);
graph.addNode(8);
graph.addNode(9);
graph.addNode(10);
graph.addEdge(1, 2, 0);
graph.addEdge(1, 5, 0);
graph.addEdge(1, 9, 0);
graph.addEdge(2, 3, 0);
graph.addEdge(3, 4, 0);
graph.addEdge(5, 6, 0);
graph.addEdge(5, 7, 0);
graph.addEdge(6, 8, 0);
graph.addEdge(9, 10, 0);
graph.addEdge(9, 0, 0);
graph.rmNode( 0);


