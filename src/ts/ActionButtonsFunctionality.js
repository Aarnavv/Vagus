import Algorithms from "./Algorithms";
import currentState from "./GlobalState";
import { updateBiDirectionalVisitedNodes, updateRandomVisitedNodes, updateVisitedNodes, unUpdateNodes } from "./HexBoardAlgoRunUpdate";
import { setInitialNodes } from "./HexBoardUpdate";
import Graph from "./Graph";
import { AlgoType } from "./Types";
let pathToRemove = [];
let pathToRemoveRandom = new Set();
let visitedToRemove = [];
let visitedToRemoveBomb = [];
let bomb = false;
/**
 * Sets the hex board to its default initial state when the Stop button is clicked.
 * Requires no parameters.
 * @return void
 */
const StopButtonClick = () => {
    if (currentState.run() === true)
        currentState.changeRun();
    document.getElementById('stop-button').classList.add('button-clicked');
    RemoveAllClasses(500, ['start-node', 'end-node', 'wall-node', 'weight-node', 'bomb-node']);
    currentState.changeBombNode(null);
    Graph.copy(currentState.initGraph(), currentState.graph(), 1);
    setTimeout(() => {
        document.getElementById('stop-button').classList.remove('button-clicked');
        setInitialNodes();
    }, 510);
};
const StartButtonClick = (currentNode, running) => {
    if (!running) {
        let remAlgo = [AlgoType.aStarSearch, AlgoType.bellmanFord, AlgoType.bestFirstSearch, AlgoType.breadthFirstSearch, AlgoType.depthFirstSearch, AlgoType.depthFirstSearch];
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
        else if (currentState.algorithm() === 'rand-algo' && currentState.run()) {
            let endNode = currentState.endNode();
            setTimeout(() => {
                updateRandomVisitedNodes(currentNode.getData());
                let oldNode = currentNode;
                currentNode = currentNode.getRandomNeighbour();
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
            }, 10);
        }
        else if (remAlgo.includes(currentState.algorithm())) {
            RemoveAllClasses(1, []);
            if (currentState.bombNode() === null) {
                let path = Algorithms.runAlgoFromGlobalStateNoBomb().path;
                let visitedInOrder = Algorithms.runAlgoFromGlobalStateNoBomb().visitedInOrder;
                let ids = Array.from(visitedInOrder.keys());
                updateVisitedNodes(ids, null, path, visitedToRemove, visitedToRemoveBomb, pathToRemove, false, 0);
            }
            else {
                let path = Algorithms.runAlgorithmGlobalStateYesBomb().path;
                let visitedP1 = Algorithms.runAlgorithmGlobalStateYesBomb().visitedP1;
                let visitedP2 = Algorithms.runAlgorithmGlobalStateYesBomb().visitedP2;
                let ids1 = Array.from(visitedP1.keys());
                let ids2 = Array.from(visitedP2.keys());
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
        }, 250);
    }
};
const PrevButtonClick = () => {
    if (currentState.run() === true)
        currentState.changeRun();
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
const RemoveAllClasses = (time, opt) => {
    setTimeout(() => {
        RemoveAllNodes('path-node');
        RemoveAllNodes('visited-node');
        RemoveAllNodes('visited-node-bomb');
        RemoveAllNodes('un-path-node');
        RemoveAllNodes('un-visited-node');
        opt.forEach((x) => RemoveAllNodes(x));
    }, time);
};
const ResetReferenceVariables = () => {
    pathToRemove = [];
    pathToRemoveRandom = new Set();
    visitedToRemove = [];
    visitedToRemoveBomb = [];
    bomb = false;
};
export { StopButtonClick, StartButtonClick, PrevButtonClick, RemoveAllClasses, };
