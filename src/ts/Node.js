import Edge from './Edge';
export default class Node {
    data; //id
    adjNodes; //adjacent nodes
    xCoord = 0;
    yCoord = 0;
    use = true;
    setUse(inUse) { this.use = inUse; }
    inUse() { return this.use; }
    setX(x) {
        if (typeof x === "string")
            this.xCoord = parseFloat(x);
        else
            this.xCoord = x;
    }
    setY(y) {
        if (typeof y === "string")
            this.yCoord = parseFloat(y);
        else
            this.yCoord = y;
    }
    setCoords(x, y) {
        this.setX(x);
        this.setY(y);
    }
    x() {
        return this.xCoord;
    }
    y() {
        return this.yCoord;
    }
    //@ts-ignore
    coordinates() {
        return [this.xCoord, this.yCoord];
    }
    comparator;
    constructor(data, comparator, x = 0, y = 0) {
        this.data = data;
        this.comparator = comparator;
        this.adjNodes = [];
        this.adjNodes.push(new Edge(this, 0));
        this.setX(x);
        this.setY(y);
    }
    getData() {
        return this.data;
    }
    getAdjNodes() {
        return this.adjNodes;
    }
    addAdjNode(node, cost) {
        if (this.adjNodes.every((edge) => {
            return edge.dest.getData() !== node.getData();
        }))
            this.adjNodes.push(new Edge(node, cost));
        return;
    }
    rmAdjNode(data) {
        const index = this.adjNodes.findIndex((node) => this.comparator(node.dest.data, data) === 0);
        if (index > -1) {
            return this.adjNodes.splice(index, 1)[0].dest;
        }
        else
            return null;
    }
    toString() {
        let metaData = 'data:' + this.data + ',\nNeighbours:[\n';
        this.adjNodes.forEach((edge) => {
            metaData += "    {dest:" + edge.dest.getData() + ", cost:" + edge.cost + "},\n";
        });
        metaData += "]\ncoords:{";
        metaData += "\n     x:" + this.xCoord;
        metaData += "\n     y:" + this.yCoord;
        metaData += "\n}";
        return metaData;
    }
}
//
