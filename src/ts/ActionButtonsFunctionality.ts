import Algorithms from "./Algorithms";
import currentState from "./GlobalState";
import { updateBiDirectionalVisitedNodes, updateRandomVisitedNodes, updateVisitedNodes, unUpdateNodes } from "./HexBoardAlgoRunUpdate";
import { setInitialNodes } from "./HexBoardUpdate";
import Graph from "./Graph";

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

let pathToRemove: number[] = [];
let pathToRemoveRandom: Set<number> = new Set();
let visitedToRemove: number[] = [];
let visitedToRemoveBomb: number[] = [];
let bomb: boolean = false;

const StartButtonClick = (currentNode): void => {
  if (currentState.run()) {
    if (currentState.algorithm() === null)
      alert('Please select an algorithm before continuing!');
    else if (currentState.algorithm() === 'bd-algo') {
      const [pathFromStart, visitedFromStartSet, visitedFromEndSet] = new Algorithms(currentState.graph()).biDirectional(currentState.startNode(), currentState.endNode());
      const visitedFromStartArray = Array.from(visitedFromStartSet);
      const visitedFromEndArray = Array.from(visitedFromEndSet);
      pathToRemove = pathFromStart;
      visitedToRemove = visitedFromStartArray.concat(visitedFromEndArray);
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
      let endNode: number = currentState.endNode();
      setTimeout(() => {
        updateRandomVisitedNodes(currentNode.getData())
        let oldNode = currentNode;
        currentNode = currentNode.getRandomNeighbour()
        pathToRemoveRandom.add(currentNode.getData());
        if (currentNode === oldNode) {
          alert("No Path Found! :(");
          return;
        }
        else if (currentNode.getData() !== endNode)
          StartButtonClick(currentNode);
        else if (currentNode.getData() === endNode)
          updateRandomVisitedNodes(endNode);
      }, 10)
    }
    else {
      if (currentState.bombNode() === null) {
        let path: number[] = Algorithms.runAlgoFromGlobalStateNoBomb().path;
        let visitedInOrder: Set<number> = Algorithms.runAlgoFromGlobalStateNoBomb().visitedInOrder;
        let ids: number[] = Array.from(visitedInOrder.keys());
        pathToRemove = path;
        visitedToRemove = ids;
        updateVisitedNodes(ids, null, path, false, 0);
        if (path === null || path.length === 0) {
          alert("No Path Found! :(");
          return;
        }
      }
      else {
        let path: number[] = Algorithms.runAlgorithmGlobalStateYesBomb().path;
        let visitedP1: Set<number> = Algorithms.runAlgorithmGlobalStateYesBomb().visitedP1;
        let visitedP2: Set<number> = Algorithms.runAlgorithmGlobalStateYesBomb().visitedP2;
        let ids1: number[] = Array.from(visitedP1.keys());
        let ids2: number[] = Array.from(visitedP2.keys());
        pathToRemove = path;
        visitedToRemove = ids1;
        visitedToRemoveBomb = ids2;
        bomb = true;
        updateVisitedNodes(ids1, ids2, path, true, 0);
        if (path === null || path.length === 0 || path[0] === currentState.bombNode()) {
          alert("No Path Found! :(");
          return;
        }
      }
    }
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
    // if (!currentState.run()) currentState.changeRun();
  }, time)
}

const PrevButtonClick = (): void => {
  if (currentState.run() === true) currentState.changeRun();
  if (pathToRemove.length === 0) {
    pathToRemoveRandom.forEach((id) => {
      pathToRemove.push(id);
    })
  }
  // let pathNodeTime: number = 10;
  let visitedNodeTime: number = 8;
  let pathNodeTime: number = 50;
  // let visitedNodeTime: number = 12.5;
  visitedToRemove.shift();
  if (!bomb) {
    unUpdateNodes(pathToRemove, pathToRemove.length - 1, pathNodeTime, pathNodeTime * 10, 'path-node', 'un-path-node', false);
    unUpdateNodes(visitedToRemove, visitedToRemove.length - 2, visitedNodeTime, visitedNodeTime * 10, 'visited-node', 'un-visited-node', true);
  }
  else if (bomb) {
    unUpdateNodes(pathToRemove, pathToRemove.length - 1, pathNodeTime, pathNodeTime * 10, 'path-node', 'un-path-node', false);
    unUpdateNodes(visitedToRemove, visitedToRemove.length - 2, visitedNodeTime, visitedNodeTime * 10, 'visited-node', 'un-visited-node', false);
    unUpdateNodes(visitedToRemoveBomb, visitedToRemoveBomb.length - 2, visitedNodeTime * 0.75, visitedNodeTime * 7.5, 'visited-node-bomb', 'un-visited-bomb-node', true);
  }
}

export {
  StopButtonClick,
  StartButtonClick,
  PrevButtonClick,
  RemoveAllClasses,
}