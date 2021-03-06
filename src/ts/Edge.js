/**
 * This class is the backbone of the graph architecture.
 * This class allows movement from one node [src] to another node [dest] at a certain cost
 *
 * The logical representation of this class is :
 * src -> cost -> dest.
 *
 * @author aditya , <adityavikramsinha19@gmail.com>
 */
export default class Edge {
    // the dest node
    dest;
    // the cost of traversal
    cost;
    /**
     * Constructs a new Edge with a given destination node and cost from the source node.
     *
     * @param dest the destination node to make a connection to
     * @param cost the cost of movement from the source node to the destination node.
     */
    constructor(dest, cost) {
        this.dest = dest;
        this.cost = cost;
    }
    /**
     * Updates or changes the cost of movement
     * from a src node to a destination node.
     *
     * @param _newCost New cost of movement
     */
    changeCost(_newCost) {
        this.cost = _newCost;
    }
    /**
     * Updates or changes the destination to which the movment
     * will occur to.
     *
     * @param _newDest New destination for movement to
     */
    changeDest(_newDest) {
        this.dest = _newDest;
    }
    /**
     * Function returns a string representation of this Edge.
     * The representation looks like :
     * {dest:xxxx , cost:xxxx}
     *
     * @returns a string representation of this Edge.
     */
    toString() {
        return '{dest:' + this.dest + ', cost:' + this.cost + '}';
    }
}
