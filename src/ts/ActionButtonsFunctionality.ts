import { SetInitialNodes } from "./HexBoardUpdate";

const StopButtonClick = () => {
  document.getElementById('stop-button').classList.add('button-clicked');
  RemoveAllNodes('start-node');
  RemoveAllNodes('end-node');
  RemoveAllNodes('bomb-node');
  RemoveAllNodes('weight-node');
  SetInitialNodes();
  setTimeout(() => {
    document.getElementById('stop-button').classList.remove('button-clicked');
  }, 200);
}

const RemoveAllNodes = (node) => {
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