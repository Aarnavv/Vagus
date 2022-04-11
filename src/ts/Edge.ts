import Node from "./Node";

export default class Edge<T> {
  dest: Node<T>;
  cost: number;

  constructor(dest: Node<T>, cost: number) {
    this.dest = dest;
    this.cost = cost;
  }

  changeCost(_newCost: number): void {
    this.cost = _newCost;
  }

  changeDest(_newDest: Node<T>): void {
    this.dest = _newDest;
  }

  toString(): string {
    return '{dest:' + this.dest + ', cost:' + this.cost + '}';
  }
}