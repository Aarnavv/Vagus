import Algorithms from "./Algorithms";
import currentState from "./GlobalState";
import {updateVisitedNodes} from "./HexBoardAlgoRunUpdate";
import {setInitialNodes} from "./HexBoardUpdate";

/**
 * Sets the hex board to its default initial state when the Stop button is clicked.
 * Requires no parameters.
 * @return void
 */
const StopButtonClick = (): void => {
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
  if (currentState.bombNode() === null) {
    let path: number[] = Algorithms.runAlgoFromGlobalStateNoBomb().path;
    let visitedInOrder: Set<number> = Algorithms.runAlgoFromGlobalStateNoBomb().visitedInOrder;
    let ids: number[] = Array.from(visitedInOrder.keys());
    updateVisitedNodes(ids, null, path, false);
  }
  else {
    let path: number[] = Algorithms.runAlgorithmGlobalStateYesBomb().path;
    let visitedP1: Set <number> = Algorithms.runAlgorithmGlobalStateYesBomb().visitedP1;
    let visitedP2: Set <number> = Algorithms.runAlgorithmGlobalStateYesBomb().visitedP2;
    let ids1: number[] = Array.from(visitedP1.keys());
    let ids2: number[] = Array.from(visitedP2.keys());
    updateVisitedNodes(ids1, ids2, path, true);
  }
}

const PrevButtonClick=() :void =>{

}

export {
  StopButtonClick,
  StartButtonClick
}