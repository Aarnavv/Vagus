import Algorithms from "./Algorithms";
import currentState from "./GlobalState";
import { updateBiDirectionalVisitedNodes, updateRandomVisitedNodes, updateVisitedNodes } from "./HexBoardAlgoRunUpdate";
/**
 * Sets the hex board to its default initial state when the Stop button is clicked.
 * Requires no parameters.
 * @return void
 */
const StopButtonClick = () => {
    // document.getElementById('stop-button').classList.add('button-clicked');
    // RemoveAllNodes('start-node');
    // RemoveAllNodes('end-node');
    // RemoveAllNodes('bomb-node');
    // RemoveAllNodes('weight-node');
    // RemoveAllNodes('wall-node');
    // RemoveAllNodes('path-node');
    // RemoveAllNodes('visited-node');
    // setInitialNodes();
    // setTimeout(() => {
    //   document.getElementById('stop-button').classList.remove('button-clicked');
    // }, 200);
    document.location.reload();
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
    }
    else if (currentState.algorithm() === 'rand-algo') {
        let endNode = currentState.endNode();
        setTimeout(() => {
            // console.log(currentNode.getData());
            updateRandomVisitedNodes(currentNode.getData());
            currentNode = currentNode.getRandomNeighbour();
            if (currentNode.getData() !== endNode)
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
        }
        else {
            let path = Algorithms.runAlgorithmGlobalStateYesBomb().path;
            let visitedP1 = Algorithms.runAlgorithmGlobalStateYesBomb().visitedP1;
            let visitedP2 = Algorithms.runAlgorithmGlobalStateYesBomb().visitedP2;
            let ids1 = Array.from(visitedP1.keys());
            let ids2 = Array.from(visitedP2.keys());
            updateVisitedNodes(ids1, ids2, path, true, 0);
        }
    }
};
const PrevButtonClick = () => {
};
export { StopButtonClick, StartButtonClick };
