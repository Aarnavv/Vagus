import { currentAddableNode, GRAPH } from './GlobalState'
import { NodeType } from "./Types";
import { updateState } from './fileStruct'

const UpdateHexIcon = (propID: string) => {
  updateStateOnClick('start-node', '.io-file', 'io-1', 'startNode.io');
  updateStateOnClick('end-node', '.io-file', 'io-2', 'endNode.io');
  switch (currentAddableNode) {
    case 'start-node':
      updateNode(propID, 'start-node');
      break;
    case 'end-node':
      updateNode(propID, 'end-node');
      break;
    case 'bomb-node':
      if (document.getElementById(propID).classList.contains('bomb-node')) removeOnClick(propID, 'bomb-node');
      else updateNode(propID, 'bomb-node');
      break;
    case 'weight-node':

    case 'wall-node':

    default:
      return
  }
}

const updateNode = (propID: string, node: string) => {
  if (document.getElementById(propID).classList.contains('no-node')) {
    let files = document.querySelectorAll(`.${node}`);
    for (let i = 0; i < files.length; i++) {
      const ele = files[i] as HTMLElement;
      ele.classList.remove(node);
      ele.classList.add('no-node');
    }
    document.getElementById(propID).classList.remove('no-node');
    document.getElementById(propID).classList.add(node);
  }
}

const updateStateOnClick = (node: string, fileClass: string, fileID: string, fileName: string) => {
  let ele = document.querySelector(`.${node}`) as HTMLElement;
  ele.addEventListener('click', () => {
    updateState(fileClass, fileID, fileName);
  })
}

const removeOnClick = (propID: string, nodeClass: string) => {
  document.getElementById(propID).classList.remove(nodeClass);
  document.getElementById(propID).classList.add('no-node');
}


export {
  UpdateHexIcon
}