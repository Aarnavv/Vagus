import Edge from './Edge';
export default class Node<T> {
    private readonly data: T;
    private readonly adjNodes: Edge<T>[];
    comparator: (a: T, b: T) => number;

    constructor(data: T, comparator: (a: T, b: T) => number) {
        this.data = data;
        this.comparator = comparator;
        this.adjNodes = [];
        this.adjNodes.push(new Edge(this, 0));
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
    toString():string{
        let metaData:string='data:'+this.data+',\nEdges:[\n';
        this.adjNodes.forEach((edge)=>{
            metaData+="    {dest:"+edge.dest.getData()+", cost:"+edge.cost+"},\n";
        })
        return metaData+']';
    }
}





