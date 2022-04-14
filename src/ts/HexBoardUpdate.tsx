import { currentAddableNode } from './GlobalState'
import { updateState } from './fileStruct'
import HexBoard from "./HexBoard";

const UpdateHexIcon = (propID: string) => {
  document.onmousemove = null;
  updateStateOnClick(propID);
  switch (currentAddableNode) {
    case 'start-node':
      updateNode(propID, 'start-node');
      NodeHoverAnimation(propID);
      break;
    case 'end-node':
      updateNode(propID, 'end-node');
      NodeHoverAnimation(propID);
      break;
    case 'bomb-node':
      if (document.getElementById(propID).classList.contains('bomb-node')) removeOnClick(propID, 'bomb-node');
      else updateNode(propID, 'bomb-node');
      NodeHoverAnimation(propID);
      break;
    case 'weight-node':
      if (document.getElementById(propID).classList.contains('weight-node')) removeOnClick(propID, 'weight-node');
      else WeightNodeUpdate(propID, 'weight-node');
      NodeHoverAnimation(propID);
      break;
    case 'wall-node':
      break;
    default:
      break;
  }
}

const WeightNodeUpdate = (propID: string, node: string) => {
  let cmdWidth = document.querySelector<HTMLElement>('.navbar').clientWidth;
  let hexboardHeight = document.querySelector<HTMLElement>('.hex-board').clientHeight;
  let hexWidth = 33.01;
  let hexHeight = 29.69;
  let hexRows = hexboardHeight / hexHeight;
  console.log(HexBoard.rows)
  let hexRow, hexCol, hexNo;
  if (document.getElementById(propID).classList.contains('no-node')) {
    document.onmousemove = (event) => {
      if (event.buttons === 1) {
        // document.getElementById(this).classList.remove('no-node');
        // document.getElementById(this).classList.add(node);
        let cursorX;
        let cursorY;
        document.onmousemove = function (e) {
          cursorX = e.pageX - cmdWidth;
          cursorY = e.pageY;
          hexRow = Math.floor(cursorY / hexRows);
          hexCol = Math.floor(cursorX / hexWidth);
          hexNo = (hexCol * HexBoard.rows) + hexRow;
          // console.log(cursorX, cursorY);
          // console.log(hexRow, hexCol);
          console.log(hexNo);
        }
      }
    }
    document.getElementById(propID).classList.remove('no-node');
    document.getElementById(propID).classList.add(node);
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

const updateStateOnClick = (propID: string) => {
  let ele = document.getElementById(propID)
  if (ele.classList.contains('start-node'))
    updateState('.io-file', 'io-1', 'startNode.io');
  else if (ele.classList.contains('end-node'))
    updateState('.io-file', 'io-2', 'endNode.io');
  else if (ele.classList.contains('bomb-node'))
    updateState('.io-file', 'io-3', 'bombNode.io');
  else if (ele.classList.contains('weight-node'))
    updateState('.io-file', 'io-4', 'weightNode.io');
}

const removeOnClick = (propID: string, nodeClass: string) => {
  document.getElementById(propID).classList.remove(nodeClass);
  document.getElementById(propID).classList.add('no-node');
}

const NodeHoverAnimation = (propID: string) => {
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

const SetInitialNodes = () => {
  for (let i = 0; i < HexBoard.idVar; i++) {
    if (i == (HexBoard.rows * 3)) {
      setTimeout(() => {
        document.getElementById(`props-${Math.floor((HexBoard.rows * HexBoard.cols) * 0.25)}`).classList.remove('no-node');
        document.getElementById(`props-${Math.floor((HexBoard.rows * HexBoard.cols) * 0.25)}`).classList.add('start-node');
        document.getElementById(`props-${Math.floor((HexBoard.rows * HexBoard.cols) * 0.75)}`).classList.add('end-node');
        document.getElementById(`props-${Math.floor((HexBoard.rows * HexBoard.cols) * 0.75)}`).classList.remove('no-node');
      }, 1)
    }
  }
}

export {
  UpdateHexIcon,
  SetInitialNodes,
}