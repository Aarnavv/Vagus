import HexBoardInitializer from "./HexBoardInitializer";
import currentState from "./GlobalState";
import Algorithms from "./Algorithms";
import Graph from "./Graph";
export class MazeGenerator {
    static workableRows;
    static workableColumns;
    static setRowsAndCols() {
        MazeGenerator.workableRows = HexBoardInitializer.rows;
        MazeGenerator.workableColumns = HexBoardInitializer.cols;
    }
    constructor() {
    }
    static generateHeartMaze() {
        //TODO
    }
    static generateCubeMaze() {
        //TODO
    }
    static generateHexMaze() {
        //TODO
    }
    static generateRandomMaze() {
        let path = new Map();
        for (let i = 0; i < currentState.graph().nodes().size / 100; i++) {
            let randomID = Math.floor(Math.random() * currentState.graph().nodes().size);
            if (randomID !== currentState.startNode() && randomID !== currentState.endNode() && randomID !== currentState.bombNode())
                path.set(randomID, false);
        }
        Graph.copy(currentState.initGraph(), currentState.graph(), 1);
        path.forEach((_, nodeID) => {
            let probability = Math.floor(Math.random() * ((2 - 1) + 1));
            if (probability % 2 == 0) {
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
    static generateLeastCostPathBlocker() {
        let algo = new Algorithms(currentState.graph());
        let path = [];
        if (currentState.bombNode() !== null) {
            let [p1] = algo.dijkstras(currentState.startNode(), currentState.bombNode());
            let [p2] = algo.dijkstras(currentState.bombNode(), currentState.endNode());
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
            [path] = algo.dijkstras(currentState.startNode(), currentState.endNode());
            if (path !== null) {
                path.pop();
                path.shift();
                path.forEach((nodeID) => currentState.graph().rmNode(nodeID));
                return path;
            }
        }
        return null;
    }
    static generateShortestPathBlocker() {
        let algo = new Algorithms(currentState.graph());
        let path = [];
        if (currentState.bombNode() !== null) {
            let [p1] = algo.aStar(currentState.startNode(), currentState.bombNode());
            let [p2] = algo.aStar(currentState.bombNode(), currentState.endNode());
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
            [path] = algo.aStar(currentState.startNode(), currentState.endNode());
            if (path !== null) {
                path.pop();
                path.shift();
                path.forEach((nodeID) => currentState.graph().rmNode(nodeID));
                return path;
            }
        }
        return null;
    }
}
