import Algorithms from "./Algorithms";
import currentState from "./GlobalState";
import { updateBiDirectionalVisitedNodes, updateRandomVisitedNodes, updateVisitedNodes } from "./HexBoardAlgoRunUpdate";
import { setInitialNodes } from "./HexBoardUpdate";
import Graph from "./Graph";
/**
 * Sets the hex board to its default initial state when the Stop button is clicked.
 * Requires no parameters.
 * @return void
 */
const StopButtonClick = () => {
    currentState.changeRun();
    document.getElementById('stop-button').classList.add('button-clicked');
    setTimeout(() => {
        RemoveAllNodes('start-node');
        RemoveAllNodes('end-node');
        RemoveAllNodes('bomb-node');
        RemoveAllNodes('weight-node');
        RemoveAllNodes('wall-node');
        RemoveAllNodes('path-node');
        RemoveAllNodes('visited-node');
        RemoveAllNodes('visited-node-bomb');
        currentState.changeBombNode(null);
        setInitialNodes();
        Graph.copy(currentState.initGraph(), currentState.graph(), 1);
    }, 500);
    setTimeout(() => {
        document.getElementById('stop-button').classList.remove('button-clicked');
    }, 200);
};
/**
 * Removes all the nodes of a certain type from the board.
 * @param node The class of the node type that has to be removed from the board.
 * @return void
 */
const RemoveAllNodes = (node) => {
    let nodes = document.querySelectorAll(`.${node}`);
    let svgNode = document.querySelectorAll(`.svg-${node}`);
    for (let i = 0; i < nodes.length; i++) {
        const ele = nodes[i];
        ele.classList.remove(node);
        ele.classList.remove('node-hover');
        ele.classList.add('no-node');
        const svgEle = svgNode[i];
        svgEle.classList.remove(`svg-${node}`);
        svgEle.classList.add('no-node', 'icon');
    }
};
const StartButtonClick = (currentNode) => {
    if (currentState.run()) {
        if (currentState.algorithm() === null)
            alert('Please select an algorithm before continuing!');
        else if (currentState.algorithm() === 'bd-algo') {
            const [pathFromStart, visitedFromStartSet, visitedFromEndSet] = new Algorithms(currentState.graph()).biDirectional(currentState.startNode(), currentState.endNode());
            const visitedFromStartArray = Array.from(visitedFromStartSet);
            const visitedFromEndArray = Array.from(visitedFromEndSet);
            if (visitedFromStartArray.length > visitedFromEndArray.length) {
                updateBiDirectionalVisitedNodes(visitedFromStartArray, pathFromStart, true, 0);
                updateBiDirectionalVisitedNodes(visitedFromEndArray, pathFromStart, false, 0);
            }
            else {
                updateBiDirectionalVisitedNodes(visitedFromStartArray, pathFromStart, false, 0);
                updateBiDirectionalVisitedNodes(visitedFromEndArray, pathFromStart, true, 0);
            }
            if (pathFromStart.length === 0 || pathFromStart === null) {
                alert("No Path Found! :(");
                return;
            }
        }
        else if (currentState.algorithm() === 'rand-algo') {
            let endNode = currentState.endNode();
            setTimeout(() => {
                updateRandomVisitedNodes(currentNode.getData());
                let oldNode = currentNode;
                currentNode = currentNode.getRandomNeighbour();
                if (currentNode === oldNode) {
                    alert("No Path Found! :(");
                    return;
                }
                else if (currentNode.getData() !== endNode)
                    StartButtonClick(currentNode);
                else if (currentNode.getData() === endNode)
                    updateRandomVisitedNodes(endNode);
            }, 10);
        }
        else {
            if (currentState.bombNode() === null) {
                let path = Algorithms.runAlgoFromGlobalStateNoBomb().path;
                let visitedInOrder = Algorithms.runAlgoFromGlobalStateNoBomb().visitedInOrder;
                let ids = Array.from(visitedInOrder.keys());
                updateVisitedNodes(ids, null, path, false, 0);
                if (path === null || path.length === 0) {
                    alert("No Path Found! :(");
                    return;
                }
            }
            else {
                let path = Algorithms.runAlgorithmGlobalStateYesBomb().path;
                let visitedP1 = Algorithms.runAlgorithmGlobalStateYesBomb().visitedP1;
                let visitedP2 = Algorithms.runAlgorithmGlobalStateYesBomb().visitedP2;
                let ids1 = Array.from(visitedP1.keys());
                let ids2 = Array.from(visitedP2.keys());
                updateVisitedNodes(ids1, ids2, path, true, 0);
                if (path === null || path.length === 0 || path[0] === currentState.bombNode()) {
                    alert("No Path Found! :(");
                    return;
                }
            }
        }
    }
};
const PrevButtonClick = () => {
};
export { StopButtonClick, StartButtonClick, };
