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
     * tries to understand if the graph is cyclic or not.
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
        return this.Nodes;
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
    /**
     * Adds an edge between the source and destination nodes. There is a given cost which HAS to be specified and thus,
     * depending on if the graph is a directed one or an undirected one, the edge addition with we either both way or only singular
     * way.
     * @param source the node to add the connection from
     * @param destination the node to add the connection to
     * @param cost the cost of the connection between them.
     */
    addEdge(source, destination, cost) {
        let src = this.nodes().get(source);
        let dest = this.nodes().get(destination);
        src.addAdjNode(dest, cost);
        if (this.isUndirected)
            dest.addAdjNode(src, cost);
    }
    /**
     * Removes an edge between a valid source node and a valid destination node. In case the graph is cyclic, it will remove
     * an edge from both the destination to source node and from the source node to the destination node. If the flag is
     * off then it will not remove the edge from the destination node to source node. This function just requires the node
     * ids to check if the nodes are present. After that it gets the nodes from the internal storage. Again, this also will only
     * work in case of both source and destination nodes being in active use. Else it will fail to run and no change will be made.
     * @param source the node id from which the connection starts
     * @param destination the node id at which the connection ends
     */
    rmEdge(source, destination) {
        const src = this.nodes().get(source);
        const dest = this.nodes().get(destination);
        if (src && dest) {
            src.rmAdjNode(destination);
            if (this.isUndirected)
                dest.rmAdjNode(source);
        }
    }
    /**
     * Gives the euclidean distance between two nodes in the graph based on their x and y coordinates on a 2-D plane.
     * @param _this the start node
     * @param _that the end node.
     * @return number signifying the euclidean distance between the positions of the 2 nodes.
     */
    distBw(_this, _that) {
        return Math.sqrt(Math.pow(_that.x() - _this.x(), 2) + Math.pow(_that.y() - _this.y(), 2));
    }
    /**
     * Returns a boolean which signifies if the present graph is cyclic or not. Does not detect negative weight cycles and
     * uses only the Depth-first-search recursive stack trace algorithm to function.
     * @param start the start node
     * @param end the end node.
     * @return boolean
     */
    hasCycles(start, end) {
        return new Algorithms(this).dfs(start, end)[0];
    }
    freeze() {
        Object.freeze(this);
    }
    static freeze(graph) { Object.freeze(graph); }
    /**
     * Modifies the given _presentGraph graph to get the state of a node present in the _initGraph. Given a node-label
     * it will get the relevant node from the _initGraph, and it will link all of the neighbors of that node to
     * it, and link that node to its n neighbors. It must also be noted that the _presentGraph will fail to add
     * neighbors which are current not in use in the state of the application. To know about the different states of a Node
     * in a graph refer to the node class documentation.
     * @param data is the node to get from the _initGraph, this is also known as the initial state of the node and the node
     * will be added to the graph EXACTLY like this.
     * @param _initGraph the Graph from which to fetch the node to add
     * @param _presentGraph the graph to which the node needs to be added.
     * @return void
     */
    static revertNode(data, _initGraph, _presentGraph) {
        let initNode = _initGraph.nodes().get(data);
        _presentGraph.addNode(initNode.getData());
        initNode.getAdjNodes().forEach((edge) => {
            if (_presentGraph.nodes().has(edge.dest.getData())) {
                initNode.addAdjNode(edge.dest, edge.cost);
                edge.dest.addAdjNode(initNode, edge.cost);
            }
        });
    }
    updateCostOfIncoming(data, cost) {
        let node = this.nodes().get(data);
        if (node === undefined)
            return;
        node.getAdjNodes().forEach((edge) => {
            if (edge.dest.getData() !== node.getData()) {
                edge.dest.updateCostTo(node, cost);
            }
        });
    }
}
