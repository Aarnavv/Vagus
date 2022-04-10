export default class Edge {
    dest;
    cost;
    constructor(dest, cost) {
        this.dest = dest;
        this.cost = cost;
    }
    changeCost(_newCost) {
        this.cost = _newCost;
    }
    changeDest(_newDest) {
        this.dest = _newDest;
    }
    toString() {
        return '{dest:' + this.dest + ', cost:' + this.cost + '}';
    }
}
