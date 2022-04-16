import { setInitialNodes } from "./HexBoardUpdate";
import Algorithms from "./Algorithms";
import { updateVisitedNodes } from "./HexBoardAlgoRunUpdate";
/**
 * Sets the hex board to its default initial state when the Stop button is clicked.
 * Requires no parameters.
 * @return void
 */
const StopButtonClick = () => {
    document.getElementById('stop-button').classList.add('button-clicked');
    RemoveAllNodes('start-node');
    RemoveAllNodes('end-node');
    RemoveAllNodes('bomb-node');
    RemoveAllNodes('weight-node');
    RemoveAllNodes('wall-node');
    RemoveAllNodes('path-node');
    RemoveAllNodes('visited-node');
    setInitialNodes();
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
const StartButtonClick = () => {
    let path = Algorithms.runAlgoFromGlobalStateNoBomb().path;
    let visitedInOrder = Algorithms.runAlgoFromGlobalStateNoBomb().visitedInOrder;
    // console.log(path);
    let ids = Array.from(visitedInOrder.keys());
    // console.log(ids);
    updateVisitedNodes(ids, path);
};
export { StopButtonClick, StartButtonClick };
