import Edge from './Edge';


export default class Node<T> {
    private readonly data: T; //id
    private readonly adjNodes: Edge<T>[]; //adjacent nodes
    private xCoord: number = 0;
    private yCoord: number = 0;

    setX(x: number | string): void {
        if (typeof x === "string") this.xCoord = parseFloat(x);
        else this.xCoord = x;
    }

    setY(y: number | string): void {
        if (typeof y === "string") this.yCoord = parseFloat(y);
        else this.yCoord = y;
    }

    setCoords(x: number | string, y: number | string): void {
        this.setX(x);
        this.setY(y);
    }

    x(): number {
        return this.xCoord;
    }

    y(): number {
        return this.yCoord;
    }

    coordinates(): [x: number, y: number | string] {
        return [this.xCoord, this.yCoord];
    }


    comparator: (a: T, b: T) => number;

    constructor(data: T, comparator: (a: T, b: T) => number, x: number = 0, y: number = 0) {
        this.data = data;
        this.comparator = comparator;
        this.adjNodes = [];
        this.adjNodes.push(new Edge(this, 0));
        this.setX(x);
        this.setY(y);
    }

    getData(): T {
        return this.data;
    }

    getAdjNodes(): Edge<T>[] {
        return this.adjNodes;
    }

    addAdjNode(node: Node<T>, cost: number): void {
        this.adjNodes.push(new Edge(node, cost));
    }

    rmAdjNode(data: T): Node<T> | null {
        const index = this.adjNodes.findIndex((node) => this.comparator(node.dest.data, data) === 0);
        if (index > -1) {
            return this.adjNodes.splice(index, 1)[0].dest;
        } else return null;
    }

    toString(): string {
        let metaData: string = 'data:' + this.data + ',\nNeighbours:[\n';
        this.adjNodes.forEach((edge) => {
            metaData += "    {dest:" + edge.dest.getData() + ", cost:" + edge.cost + "},\n";
        })
        metaData += "]\ncoords:{";
        metaData += "\n     x:" + this.xCoord;
        metaData += "\n     y:" + this.yCoord;
        metaData += "\n}";
        return metaData;
    }
}
//



