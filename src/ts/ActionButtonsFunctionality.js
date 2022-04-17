import Algorithms from "./Algorithms";
import currentState from "./GlobalState";
import { updateVisitedNodes } from "./HexBoardAlgoRunUpdate";
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
const StartButtonClick = () => {
    if (currentState.algorithm() === null)
        alert('Please select an algorithm before continuing!');
    else {
        if (currentState.bombNode() === null) {
            let path = Algorithms.runAlgoFromGlobalStateNoBomb().path;
            let visitedInOrder = Algorithms.runAlgoFromGlobalStateNoBomb().visitedInOrder;
            let ids = Array.from(visitedInOrder.keys());
            updateVisitedNodes(ids, null, path, false);
        }
        else {
            let path = Algorithms.runAlgorithmGlobalStateYesBomb().path;
            let visitedP1 = Algorithms.runAlgorithmGlobalStateYesBomb().visitedP1;
            let visitedP2 = Algorithms.runAlgorithmGlobalStateYesBomb().visitedP2;
            let ids1 = Array.from(visitedP1.keys());
            let ids2 = Array.from(visitedP2.keys());
            updateVisitedNodes(ids1, ids2, path, true);
        }
    }
};
const PrevButtonClick = () => {
};
export { StopButtonClick, StartButtonClick };
