import Node from "./Node";

export default class Graph<T> {
  nodes: Map<T, Node<T>> = new Map();
  comparator: (a: T, b: T) => number;
  isCyclic: boolean;
  isUndirected: boolean;

  constructor(comparator: (a: T, b: T) => number) {
    this.comparator = comparator;
    this.isUndirected = true;
  }

  setNodeCoords(data: T, { x, y }: { x: number, y: number }) {
    this.nodes.get(data).setCoords(x, y);
  }

  numberOfNodes(): number {
    return this.nodes.size;
  }

  nodesPresent(): Map<T, Node<T>> {
    return this.nodes;
  }

  nodeExists(data: T): boolean {
    return this.nodes.get(data) !== undefined;
  }

  edgeExists(source: T, destination: T): boolean {
    const src = this.nodes.get(source);
    const at: number = src.getAdjNodes().findIndex((edge) => {
      return edge.dest.getData() === destination;
    });
    return at >= 0;
  }

    addNode(data: T): Node<T>{
        let node = this.nodes.get(data);
        if (node) return node;
        node = new Node(data, this.comparator);
        this.nodes.set(data, node);
        return node;
    }

  rmNode(data: T): Node<T> | null {
    const nodeToRm = this.nodes.get(data);
    if (!nodeToRm) return null;
    this.nodes.forEach((node) => {
      node.rmAdjNode(nodeToRm.getData());
    })
    this.nodes.delete(data);
    return nodeToRm;
  }

    addEdge(source: T, destination: T, cost: number): void {
        let src = this.addNode(source);
        let dest = this.addNode(destination);
        src.addAdjNode(dest, cost);
        if (this.isUndirected) dest.addAdjNode(src, cost);
    }


  rmEdge(source: T, destination: T) {
    const src = this.nodes.get(source);
    const dest = this.nodes.get(destination);
    if (src && dest) {
      src.rmAdjNode(destination);
      if (this.isUndirected)
        dest.rmAdjNode(source);
    }
  }

    distBw(_this: Node<T>, _that: Node<T>): number {
        return  Math.sqrt(Math.pow(_that.x() - _this.x(), 2) + Math.pow(_that.y() - _this.y(), 2));
    }
}