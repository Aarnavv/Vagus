import Node from "./Node";
import { Algorithms } from "./Algorithms";
export default class Graph {
    /**
     * has a Map of Nodes which are present in the graph
     */
    Nodes = new Map();
    /**
     * is a comparator for the graph
     */
    comparator;
    /**
     * tries to understand if the graph is cyclic or not,
     */
    isCyclic;
    /**
     *  is a boolean for if the graph is undirected or directed.
     */
    isUndirected;
    constructor(comparator) {
        this.comparator = comparator;
        this.isUndirected = false;
    }
    nodes() {
        let nodes = new Map();
        this.Nodes.forEach((value, key) => {
            if (value.inUse())
                nodes.set(key, value);
        });
        return nodes;
    }
    setNodeCoords(data, { x, y }) {
        this.nodes().get(data).setCoords(x, y);
    }
    nodeExists(data) {
        return this.nodes().get(data) !== undefined;
    }
    edgeExists(source, destination) {
        const src = this.nodes().get(source);
        const at = src.getAdjNodes().findIndex((edge) => {
            return edge.dest.getData() === destination;
        });
        return at >= 0;
    }
    addNode(data) {
        let node = this.nodes().get(data);
        if (node !== undefined)
            return node;
        node = new Node(data, this.comparator);
        this.nodes().set(data, node);
        return node;
    }
    rmNode(data) {
        const nodeToRm = this.nodes().get(data);
        if (!nodeToRm)
            return null;
        this.nodes().forEach((node) => {
            node.rmAdjNode(nodeToRm.getData());
        });
        this.nodes().delete(data);
        return nodeToRm;
    }
    addEdge(source, destination, cost) {
        let src = this.addNode(source);
        let dest = this.addNode(destination);
        src.addAdjNode(dest, cost);
        if (this.isUndirected)
            dest.addAdjNode(src, cost);
    }
    rmEdge(source, destination) {
        const src = this.nodes().get(source);
        const dest = this.nodes().get(destination);
        if (src && dest) {
            src.rmAdjNode(destination);
            if (this.isUndirected)
                dest.rmAdjNode(source);
        }
    }
    distBw(_this, _that) {
        return Math.sqrt(Math.pow(_that.x() - _this.x(), 2) + Math.pow(_that.y() - _this.y(), 2));
    }
    hasCycles(start, end) {
        return new Algorithms(this).dfs(start, end)[0];
    }
    static revertNode(data, _initGraph, _presentGraph) {
        let initNode = _initGraph.nodes().get(data);
        _presentGraph.addNode(initNode.getData());
        initNode.getAdjNodes().forEach((edge) => {
            initNode.addAdjNode(edge.dest, edge.cost);
            edge.dest.addAdjNode(initNode, edge.cost);
        });
    }
}
