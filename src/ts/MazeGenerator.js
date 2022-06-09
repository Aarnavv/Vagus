import HexBoardInitializer from "./HexBoardInitializer";
import currentState from "./GlobalState";
import Algorithms from "./Algorithms";
import Graph from "./Graph";
export class MazeGenerator {
    // Gets the number of rows which are present in the current
    // frame of reference.
    static workableRows;
    // Gets the number of columns which are present in the current
    // frame of reference
    static workableColumns;
    /**
     * static function to initialise all the properties
     * present in the class
     * @returns void
     */
    static setProps() {
        this.workableRows = HexBoardInitializer.rows;
        this.workableColumns = HexBoardInitializer.cols;
    }
    constructor() {
    }
    static generateHeartMaze() {
        //TODO
    }
    static generateCubeMaze() {
        //TODO
    }
    /**
     * Generates a maze which has a column filled with walls except for 2 psuedo random
     * hexes.
     * Does not take care of the event in which a hex containing a bomb, start or end node is
     * assigned as a wall node.
     *
     * @returns An array of Sets.
     * Each Set contains a collection of IDs for the nodes which
     * can be blocked or changed to wall nodes on the website
     */
    static generateRidges() {
        // first check for nullity case
        if (this.workableColumns < 2 || this.workableRows < 2) {
            return null;
        }
        // array to hold the "ridges"
        let ridges = [];
        // function which can be used to create 2 at random entry points for the path.
        function generateRandomEntries(colNo) {
            let p1 = Math.floor(Math.random() * MazeGenerator.workableRows) + colNo;
            let p2 = p1 + 1;
            return {
                p1,
                p2
            };
        }
        //main loop which assigns the walls and entry points to the Array of Sets.
        for (let i = 0; i < this.workableColumns; i++) {
            let colRidge = new Set();
            if (i % 2 === 0) {
                let entryPoints = generateRandomEntries(i);
                for (let j = i * this.workableColumns; j < i * this.workableColumns + this.workableRows; j++) {
                    if (j !== entryPoints.p1 && j !== entryPoints.p2) {
                        colRidge.add(j);
                    }
                }
                ridges.push(colRidge);
            }
        }
        Graph.copy(currentState.initGraph(), currentState.graph(), 1);
        ridges.forEach((ridgeCol) => {
            ridgeCol.forEach(nodeID => {
                currentState.graph().rmNode(nodeID);
            });
        });
        return ridges;
    }
    /**
     * Generates a random maze with both a mixture of weights and walls.
     * It does take into consideration the IDs present in the StartNode, EndNode and BombNode entities.
     *
     * @returns Returns a Map, the way to interpret the Map is that the keys contain the ID and,
     * the the boolean true or false represents the type of block.
     * A true represents a wall and a false represents a weight. The probability is psuedorandom.
     */
    static generateRandomMaze() {
        let path = new Map();
        let i = 0;
        while (path.size !== currentState.graph().nodes().size / 10) {
            let randomID = Math.floor(Math.random() * currentState.graph().nodes().size);
            if (randomID !== currentState.startNode() && randomID !== currentState.endNode() && randomID !== currentState.bombNode()) {
                path.set(randomID, false);
                console.log(path.size);
            }
        }
        Graph.copy(currentState.initGraph(), currentState.graph(), 1);
        path.forEach((_, nodeID) => {
            let probability = Math.floor(Math.random() * 2);
            if (probability % 2 === 0) {
                //true then wall
                path.set(nodeID, true);
                currentState.graph().rmNode(nodeID);
            }
            else {
                // false then weight
                path.set(nodeID, false);
                currentState.graph().updateCostOfIncoming(nodeID, 10);
            }
        });
        return path;
    }
    /**
     * Generates a maze that blocks the least cost path in the grid
     *
     * @returns a Path which highlights the nodes to be blocked because they are part of the least cost path.
     */
    static generateLeastCostPathBlocker() {
        let algo = new Algorithms(currentState.graph());
        let path = [];
        if (currentState.bombNode() !== null) {
            let p1 = algo.dijkstras(currentState.startNode(), currentState.bombNode())[0];
            let p2 = algo.dijkstras(currentState.bombNode(), currentState.endNode())[0];
            if (p1 !== null && p2 !== null) {
                p1.forEach((nodeID) => {
                    if (nodeID !== currentState.bombNode() && nodeID !== currentState.startNode())
                        path.push(nodeID);
                });
                p2.forEach(nodeID => {
                    if (nodeID !== currentState.bombNode() && nodeID !== currentState.endNode())
                        path.push(nodeID);
                });
                path.forEach((nodeID) => currentState.graph().rmNode(nodeID));
                return path;
            }
        }
        else {
            path = algo.dijkstras(currentState.startNode(), currentState.endNode())[0];
            if (path !== null) {
                path.pop();
                path.shift();
                path.forEach((nodeID) => currentState.graph().rmNode(nodeID));
                return path;
            }
        }
    }
}
