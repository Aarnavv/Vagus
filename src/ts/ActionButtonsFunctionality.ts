import Algorithms from "./Algorithms";
import currentState from "./GlobalState";

import { updateBiDirectionalVisitedNodes, updateRandomVisitedNodes, updateVisitedNodes, unUpdateNodes } from "./HexBoardAlgoRunUpdate";
import { setInitialNodes } from "./HexBoardUpdate";
import Graph from "./Graph";

let pathToRemove: number[] = [];
let pathToRemoveRandom: Set<number> = new Set();
let visitedToRemove: number[] = [];
let visitedToRemoveBomb: number[] = [];
let bomb: boolean = false;

/**
 * Sets the hex board to its default initial state when the Stop button is clicked.
 * Requires no parameters.
 * @return void
 */
const StopButtonClick = (): void => {
  if (currentState.run() === true) currentState.changeRun();
  document.getElementById('stop-button').classList.add('button-clicked');
  RemoveAllClasses(500, ['start-node', 'end-node', 'wall-node', 'weight-node', 'bomb-node']);
  currentState.changeBombNode(null);
  Graph.copy(currentState.initGraph(), currentState.graph(), 1);
  setTimeout(() => {
    document.getElementById('stop-button').classList.remove('button-clicked');
    setInitialNodes();
  }, 510);
}

const StartButtonClick = (currentNode, running): void => {
  if (!running) {
    if (currentState.algorithm() === null)
      alert('Please select an algorithm before continuing!');
    else if (currentState.algorithm() === 'bd-algo') {
      RemoveAllClasses(1, []);
      const [pathFromStart, visitedFromStartSet, visitedFromEndSet] = new Algorithms(currentState.graph()).biDirectional(currentState.startNode(), currentState.endNode());
      const visitedFromStartArray = Array.from(visitedFromStartSet);
      const visitedFromEndArray = Array.from(visitedFromEndSet);
      if (currentState.bombNode() != null) {
        alert("BiDirectional Search and Random Walk cannot be used with a bomb node!");
        return;
      }
      if (visitedFromStartArray.length > visitedFromEndArray.length) {
        updateBiDirectionalVisitedNodes(visitedFromStartArray, pathFromStart, visitedToRemove, pathToRemove, true, 0);
        updateBiDirectionalVisitedNodes(visitedFromEndArray, pathFromStart, visitedToRemove, pathToRemove, false, 0);
      }
      else {
        updateBiDirectionalVisitedNodes(visitedFromStartArray, pathFromStart, visitedToRemove, pathToRemove, false, 0);
        updateBiDirectionalVisitedNodes(visitedFromEndArray, pathFromStart, visitedToRemove, pathToRemove, true, 0);
      }
    }
    else if (currentState.algorithm() === 'rand-algo') {
      let endNode: number = currentState.endNode();
      setTimeout(() => {
        updateRandomVisitedNodes(currentNode.getData())
        let oldNode = currentNode;
        currentNode = currentNode.getRandomNeighbour()
        pathToRemoveRandom.add(currentNode.getData());
        if (currentState.bombNode() != null) {
          alert("BiDirectional Search and Random Walk cannot be used with a bomb node!");
          return;
        }
        if (currentNode === oldNode) {
          alert("No Path Found! :(");
          return;
        }
        else if (currentNode.getData() !== endNode)
          StartButtonClick(currentNode, false);
        else if (currentNode.getData() === endNode)
          updateRandomVisitedNodes(endNode);
      }, 10)
    }
    else {
      RemoveAllClasses(1, []);
      if (currentState.bombNode() === null) {
        let path: number[] = Algorithms.runAlgoFromGlobalStateNoBomb().path;
        let visitedInOrder: Set<number> = Algorithms.runAlgoFromGlobalStateNoBomb().visitedInOrder;
        let ids: number[] = Array.from(visitedInOrder.keys());
        updateVisitedNodes(ids, null, path, visitedToRemove, visitedToRemoveBomb, pathToRemove, false, 0);
      }
      else {
        let path: number[] = Algorithms.runAlgorithmGlobalStateYesBomb().path;
        let visitedP1: Set<number> = Algorithms.runAlgorithmGlobalStateYesBomb().visitedP1;
        let visitedP2: Set<number> = Algorithms.runAlgorithmGlobalStateYesBomb().visitedP2;
        let ids1: number[] = Array.from(visitedP1.keys());
        let ids2: number[] = Array.from(visitedP2.keys());
        bomb = true;
        updateVisitedNodes(ids1, ids2, path, visitedToRemove, visitedToRemoveBomb, pathToRemove, true, 0);
      }
    }
  }
  else if (running) {
    RemoveAllClasses(1, []);
    currentState.changeRun(); //To stop the old
    setTimeout(() => {
      currentState.changeRun(); // To set state for the next run
      StartButtonClick(currentNode, false);
    }, 250)
  }
}

const PrevButtonClick = (): void => {
  if (currentState.run() === true) currentState.changeRun();
  visitedToRemove.shift();
  if (!bomb) {
    unUpdateNodes('path-node', 'un-path-node');
    unUpdateNodes('visited-node', 'un-visited-node');
  }
  else if (bomb) {
    unUpdateNodes('path-node', 'un-path-node');
    unUpdateNodes('visited-node', 'un-visited-node');
    unUpdateNodes('visited-node-bomb', 'un-visited-bomb-node');
  }
  ResetReferenceVariables();
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

const RemoveAllClasses = (time: number, opt: string[]) => {
  setTimeout(() => {
    RemoveAllNodes('path-node');
    RemoveAllNodes('visited-node');
    RemoveAllNodes('visited-node-bomb');
    RemoveAllNodes('un-path-node');
    RemoveAllNodes('un-visited-node');
    opt.forEach((x: string) => RemoveAllNodes(x));
  }, time)
}

const ResetReferenceVariables = (): void => {
  pathToRemove = [];
  pathToRemoveRandom = new Set();
  visitedToRemove = [];
  visitedToRemoveBomb = [];
  bomb = false;
}
export {
  StopButtonClick,
  StartButtonClick,
  PrevButtonClick,
  RemoveAllClasses,
}