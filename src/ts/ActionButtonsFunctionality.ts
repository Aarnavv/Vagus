import { setInitialNodes } from "./HexBoardUpdate";
import Algorithms  from "./Algorithms";

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
  setInitialNodes();
  setTimeout(() => {
    document.getElementById('stop-button').classList.remove('button-clicked');
  }, 200);
}

const StartButtonClicked = ():void =>{
  document.getElementById('start-button').classList.add('button-clicked');
  //code goes here.
  let [AnimationPath , visitedInOrder]= Algorithms.runAlgoFromGlobalState();
  setTimeout(_=> document.getElementById('start-button').classList.remove('button-clicked'), 200);

}

/**
 * Removes all the nodes of a certain type from the board.
 * @param node The class of the node type that has to be removed from the board.
 * @return void
 */
const RemoveAllNodes = (node: string): void => {
  let nodes = document.querySelectorAll(`.${node}`);
  for (let i = 0; i < nodes.length; i++) {
    const ele = nodes[i] as HTMLElement;
    ele.classList.remove(node);
    ele.classList.add('no-node');
  }
}

export {
  StopButtonClick
}