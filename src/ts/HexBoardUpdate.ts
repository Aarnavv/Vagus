import currentState from './GlobalState'
import { updateState } from './fileStruct'
import HexBoardInitializer from './HexBoardInitializer';
import { MazeGenerator } from './MazeGenerator';
import { MazeGenerationType } from './Types';
import Graph from "./Graph";
import { RemoveAllClasses } from './ActionButtonsFunctionality';

const updateHexIcon = (propID: string, id: number): void => {
  document.onmousemove = null;
  document.onmousedown = null;
  updateStateOnClick(propID);
  switch (currentState.addableNode()) {
    case 'start-node':
      updateNode(propID, 'start-node');
      nodeHoverAnimation(propID);
      currentState.changeStartNode(id);
      break;
    case 'end-node':
      updateNode(propID, 'end-node');
      nodeHoverAnimation(propID);
      currentState.changeEndNode(id);
      break;
    case 'bomb-node':
      nodeHoverAnimation(propID);
      if (document.getElementById(propID).classList.contains('bomb-node')) {
        removeOnClick(propID, 'bomb-node', id);
        currentState.changeBombNode(null);
      }
      else {
        updateNode(propID, 'bomb-node');
        currentState.changeBombNode(id);
      }
      break;
    case 'weight-node':
      if (document.getElementById(propID).classList.contains('weight-node')) {
        removeOnClick(propID, 'weight-node', id);
      }
      else {
        nodeHoverAnimation(propID);
        multiNodeUpdate(propID, 'weight-node', ['no-node']);
      }
      break;
    case 'wall-node':
      if (document.getElementById(propID).classList.contains('wall-node')) {
        removeOnClick(propID, 'wall-node', id);
      }
      else {
        nodeHoverAnimation(propID);
        multiNodeUpdate(propID, 'wall-node', ['no-node', 'icon']);
      }
      break;
    default:
      break;
  }
}

const multiNodeUpdate = (propID: string, node: string, toRemove: Array<string>): void => {
  document.onmousemove = null;
  document.onmousedown = null;
  if (document.getElementById(propID).classList.contains('no-node')) {
    document.getElementById(propID).classList.remove('no-node');
    document.getElementById(propID).classList.add(node);
    multiNodeGraphUpdate(node, Number(propID.substring(propID.lastIndexOf('-') + 1)), 10, false)
    let svgID = propID.replace('props', 'svg');
    toRemove.forEach(element => document.getElementById(svgID).classList.remove(element));
    document.getElementById(svgID).classList.add(`svg-${node}`);
    document.onmousedown = () => {
      document.onmousemove = (e) => {
        if (e.buttons === 1) {
          let svg = e.target as HTMLElement;
          if (svg.id.startsWith('svg')) {
            let SVG_ID = svg.id;
            let HoverPropsID = svg.id.replace('svg', 'props');
            if (document.getElementById(HoverPropsID).classList.contains('no-node')) {
              toRemove.forEach(element => document.getElementById(SVG_ID).classList.remove(element));
              document.getElementById(SVG_ID).classList.add(`svg-${node}`);
              document.getElementById(HoverPropsID).classList.remove('no-node');
              document.getElementById(HoverPropsID).classList.add(node);
              multiNodeGraphUpdate(node, Number(HoverPropsID.substring(HoverPropsID.lastIndexOf('-') + 1)), 10, false)
            }
            nodeHoverAnimation(HoverPropsID);
          }
        }
      }
    }
  }
}

const updateNode = (propID: string, node: string): void => {
  let svgID = propID.replace('props', 'svg');
  if (document.getElementById(propID).classList.contains('no-node')) {
    let files = document.querySelectorAll(`.${node}`);
    let svgFiles = document.querySelectorAll(`.svg-${node}`);
    for (let i = 0; i < files.length; i++) {
      const ele = files[i] as HTMLElement;
      ele.classList.remove(node);
      ele.classList.add('no-node');
      const svgEle = svgFiles[i] as HTMLElement;
      svgEle.classList.remove(`svg-${node}`);
      svgEle.classList.add('no-node');
    }
    document.getElementById(propID).classList.remove('no-node');
    document.getElementById(propID).classList.add(node);
    document.getElementById(svgID).classList.remove('no-node');
    document.getElementById(svgID).classList.add(`svg-${node}`);
  }
}

const multiNodeGraphUpdate = (node: string, id: number, cost: number, add: boolean): void => {
  if (node === 'weight-node') {
    currentState.graph().updateCostOfIncoming(id, cost);
  }
  else if (node === 'wall-node') {
    if (add)
      Graph.revertNode(id, currentState.initGraph(), currentState.graph());
    else
      currentState.graph().rmNode(id);
  }
}

const updateStateOnClick = (propID: string): void => {
  document.onmousemove = null;
  document.onmousedown = null;
  let ele = document.getElementById(propID)
  if (ele.classList.contains('start-node'))
    updateState('.io-file', 'io-1', 'startNode.io');
  else if (ele.classList.contains('end-node'))
    updateState('.io-file', 'io-2', 'endNode.io');
  else if (ele.classList.contains('bomb-node'))
    updateState('.io-file', 'io-3', 'bombNode.io');
  else if (ele.classList.contains('weight-node'))
    updateState('.io-file', 'io-4', 'weightNode.io');
  else if (ele.classList.contains('wall-node'))
    updateState('.io-file', 'io-5', 'wallNode.io');
}

const removeOnClick = (propID: string, nodeClass: string, id: number): void => {
  let svgID = propID.replace('props', 'svg');
  document.getElementById(propID).classList.remove(nodeClass, 'node-hover');
  document.getElementById(propID).classList.add('no-node');
  document.getElementById(svgID).classList.remove(`svg-${nodeClass}`);
  document.getElementById(svgID).classList.add('no-node');
  if (nodeClass === 'wall-node' || nodeClass === 'weight-node') {
    document.getElementById(svgID).classList.remove(nodeClass);
    document.getElementById(svgID).classList.add('no-node', 'icon');
    multiNodeGraphUpdate(nodeClass, id, 1, true);
  }
}

const nodeHoverAnimation = (propID: string): void => {
  let files = document.querySelectorAll('.node-hover');
  for (let i = 0; i < files.length; i++) {
    const ele = files[i] as HTMLElement;
    ele.classList.remove('node-hover');
  }
  files = document.querySelectorAll(`#${propID}`);
  for (let i = 0; i < files.length; i++) {
    const ele = files[i] as HTMLElement;
    ele.classList.add('node-hover');
  }
}

const setInitialNodes = (): void => {
  for (let i = 0; i < HexBoardInitializer.idVar; i++) {
    if (i === (HexBoardInitializer.rows * 3)) {
      setTimeout(() => {
        let startCalculator = Math.floor((HexBoardInitializer.rows * HexBoardInitializer.cols) * 0.25);
        let endCalculator = Math.floor((HexBoardInitializer.rows * HexBoardInitializer.cols) * 0.75)
        document.getElementById(`props-${startCalculator}`).classList.remove('no-node');
        document.getElementById(`props-${startCalculator}`).classList.add('start-node');
        document.getElementById(`svg-${startCalculator}`).classList.remove('no-node');
        document.getElementById(`svg-${startCalculator}`).classList.add('svg-start-node');
        currentState.changeStartNode(startCalculator);
        document.getElementById(`props-${endCalculator}`).classList.remove('no-node');
        document.getElementById(`props-${endCalculator}`).classList.add('end-node');
        document.getElementById(`svg-${endCalculator}`).classList.remove('no-node');
        document.getElementById(`svg-${endCalculator}`).classList.add('svg-end-node');
        currentState.changeEndNode(endCalculator);
      }, 1)
    }
  }
}

const updateNodeUtil = (id: string, classesRM: string[], classesADD: string[]): void => {
  document.getElementById(id).classList.remove(...classesRM);
  document.getElementById(id).classList.add(...classesADD);
}


type displayMazeOptions  ={
  randomMap?: Map<number, boolean>,
  mazeLeastCostArray ?: number[],
  weightedRidges ?: Set<number>[],
  weightedSet ?: Set<number>,
  blockedSet ?: Set<number>,
  blockedRidges ?: Set<number>[]

}

const displayMaze = (options: displayMazeOptions): void => {

  // created a function since the same code was getting
  // repeated again and again.
  function updateNodeState(id: number , type: string ) {
    updateNodeUtil(`props-${id}`, ['no-node'], [type]);
    updateNodeUtil(`svg-${id}` , ['no-node'], [`svg-${type}`]);
  }


  if (currentState.maze() === MazeGenerationType.generateRandomMaze) {
    for (let [id, state] of options.randomMap) {
      if (state) updateNodeState(id, 'wall-node');

      else updateNodeState(id, 'weight-node');
    }
  }
  else if (currentState.maze() === MazeGenerationType.generateLeastCostPathBlocker) {
    options.mazeLeastCostArray.forEach(id => {
      updateNodeState(id, 'wall-node');
    });
  }
  else if (currentState.maze() === MazeGenerationType.generateBlockedRidges) {
    options.blockedRidges.forEach(ridge => {
      ridge.forEach(id => {
        updateNodeState(id, 'wall-node');
      });
    });
  }
  else if (currentState.maze() === MazeGenerationType.generateWeightedRidges) {
    options.weightedRidges.forEach(ridge => {
      ridge.forEach(id => {
        updateNodeState(id, 'weight-node');
      });
    });
  }
  else if (currentState.maze() === MazeGenerationType.generateWeightedRandomMaze) {
    options.weightedSet.forEach(id => {
      updateNodeState(id, 'weight-node');
    });
  }
  else if (currentState.maze() === MazeGenerationType.generateBlockedRandomMaze) {
    options.blockedSet.forEach(id => {
      updateNodeState(id, 'wall-node');
    });
  }
}

const updateMaze = (): void => {
  if (currentState.run() === true) return;
  RemoveAllClasses(1, ['start-node', 'end-node', 'wall-node', 'weight-node', 'bomb-node']);
  currentState.changeBombNode(null);
  Graph.copy(currentState.initGraph(), currentState.graph(), 1);
  setInitialNodes();
  setTimeout(() => {
    switch (currentState.maze()) {
      case MazeGenerationType.generateRandomMaze:
        let mazeMap: Map<number, boolean> = MazeGenerator.generateRandomMaze();
        displayMaze({ randomMap: mazeMap });
        break;
      case MazeGenerationType.generateWeightedRandomMaze:
        let mazeSet: Set<number> = MazeGenerator.generateRandomTypedMaze();
        displayMaze({ weightedSet: mazeSet });
        break;
      case MazeGenerationType.generateLeastCostPathBlocker:
        let mazeLeastPathBlocker: number[] = MazeGenerator.generateLeastCostPathBlocker();
        displayMaze({ mazeLeastCostArray: mazeLeastPathBlocker });
        break;
      case MazeGenerationType.generateBlockedRidges:
        let mazeGeneratedBlockedRidges: Set<number>[] = MazeGenerator.generateTypedRidges(false);
        displayMaze({ blockedRidges: mazeGeneratedBlockedRidges });
        break;
      case MazeGenerationType.generateBlockedRandomMaze:
        let blockedMazeSet: Set<number> = MazeGenerator.generateRandomTypedMaze(false);
        displayMaze({ blockedSet: blockedMazeSet });
        break;
      case MazeGenerationType.generateWeightedRidges:
        let mazeGeneratedWeightedRidges: Set<number>[] = MazeGenerator.generateTypedRidges(true);
        displayMaze({ weightedRidges: mazeGeneratedWeightedRidges });
        break;
      default:
        break;
    }
  }, 5);
}

export {
  updateHexIcon,
  setInitialNodes,
  nodeHoverAnimation,
  updateMaze,
}
