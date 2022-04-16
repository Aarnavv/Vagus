import { setInitialNodes } from "./HexBoardUpdate";
import Algorithms from "./Algorithms";
import currentState from "./GlobalState";
import { updatePathNodes, updateVisitedNodes } from "./HexBoardAlgoRunUpdate";

/**
 * Sets the hex board to its default initial state when the Stop button is clicked.
 * Requires no parameters.
 * @return void
 */
const StopButtonClick = (): void => {
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
}

/**
 * Removes all the nodes of a certain type from the board.
 * @param node The class of the node type that has to be removed from the board.
 * @return void
 */
const RemoveAllNodes = (node: string): void => {
  let nodes = document.querySelectorAll(`.${node}`);
  let svgNode = document.querySelectorAll(`.svg-${node}`);
  for (let i = 0; i < nodes.length; i++) {
    const ele = nodes[i] as HTMLElement;
    ele.classList.remove(node);
    ele.classList.remove('node-hover');
    ele.classList.add('no-node');
    const svgEle = svgNode[i] as HTMLElement;
    svgEle.classList.remove(`svg-${node}`);
    svgEle.classList.add('no-node', 'icon');
  }
}

const StartButtonClick = (): void => {
  let path: number[] = Algorithms.runAlgoFromGlobalStateNoBomb().path;
  let visitedInOrder: Map<number, number> | Map<number, boolean> = Algorithms.runAlgoFromGlobalStateNoBomb().visitedInOrder;
  // console.log(path);
  let ids: number[] = Array.from(visitedInOrder.keys());
  // console.log(ids);
  updatePathNodes(path);
  // updateVisitedNodes(ids);
}

export {
  StopButtonClick,
  StartButtonClick
}