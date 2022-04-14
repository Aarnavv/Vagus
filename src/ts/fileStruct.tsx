import React from 'react';
import '../css/navbar.css';
import {
  BATIcon,
  BOMBNode,
  ENDNode,
  IOIcon,
  MDIcon,
  SHORTESTPATHNode,
  STARTNode,
  SYSIcon,
  TSXIcon,
  UNVISITEDNode,
  VISITEDNode,
  WALLNode,
  WEIGHTNode
} from "../svgIcons/fileSVGIconComponent";
import {
  changeAddableNode,
  currentAddableNode,
  changeAlgorithm,
  changeMaze,
  changeSpeed,
  FILE_BG,
  FILE_BG_SELECTED,
  FILE_BORDER
} from "./GlobalState";
import { AlgoType, MazeType, NodeType, SpeedType } from "./Types";

export const updateState = (divClass: string, id: string, text: string): void => {
  let files = document.querySelectorAll(divClass);
  for (let i = 0; i < files.length; i++) {
    const ele = files[i] as HTMLElement;
    ele.style.backgroundColor = FILE_BG;
    ele.style.borderLeft = "";
  }
  document.getElementById(id).style.backgroundColor = FILE_BG_SELECTED;
  document.getElementById(id).style.borderLeft = `2.5px solid ${FILE_BORDER}`;
  let ext: string = text.substring(text.lastIndexOf(".") + 1);
  let textAdd: string = text.substring(0, text.lastIndexOf("."));
  switch (ext) {
    case "tsx":
      changeAlgorithm(AlgoType[textAdd]);
      break;
    case "io":
      changeAddableNode(NodeType[textAdd]);
      break;
    case "bat":
      changeMaze(MazeType[textAdd]);
      break;
    case "sys":
      changeSpeed(parseInt(SpeedType[`percent${text.substring(0, text.indexOf('p'))}`]));
      break;
    default:
      return
  }
  NodeAnimation(textAdd);
}

const NodeAnimation = (nodeType: string) => {
  let files = document.querySelectorAll('.node-hover');
  for (let i = 0; i < files.length; i++) {
    const ele = files[i] as HTMLElement;
    ele.classList.remove('node-hover');
  }
  switch (nodeType) {
    case 'startNode':
      document.querySelector<HTMLElement>('.start-node').classList.add('node-hover');
      break;
    case 'endNode':
      document.querySelector<HTMLElement>('.end-node').classList.add('node-hover');
      break;
    case 'bombNode':
      if (document.querySelector<HTMLElement>('.bomb-node'))
        document.querySelector<HTMLElement>('.bomb-node').classList.add('node-hover');
      break;
    case 'weightNode':
      if (document.querySelector<HTMLElement>('.weight-node')) { 
        let files = document.querySelectorAll('.weight-node');
        for (let i = 0; i < files.length; i++) {
          const ele = files[i] as HTMLElement;
          ele.classList.add('node-hover');
        }
      }
      break;
    default:
      break;
  }
}

export function TSXFile(props: any) {
  return (
    <div className={props.divClassName} id={props.divID} onClick={() => updateState('.tsx-file', props.divID, props.text)}>
      <TSXIcon />
      <p className={props.pClassName}>{props.text}</p>
    </div>
  )
}

export function IOFile(props: any) {
  return (
    <div className={props.divClassName} id={props.divID} onClick={() => updateState('.io-file', props.divID, props.text)}>
      <IOIcon />
      <p className={props.pClassName}>{props.text}</p>
    </div>
  )
}

export function BATFile(props: any) {
  return (
    <div className={props.divClassName} id={props.divID} onClick={() => updateState('.bat-file', props.divID, props.text)}>
      <BATIcon />
      <p className={props.pClassName}>{props.text}</p>
    </div>
  )
}

export function SYSFile(props: any) {
  return (
    <div className={props.divClassName} id={props.divID} onClick={() => updateState('.sys-file', props.divID, props.text)}>
      <SYSIcon />
      <p className={props.pClassName}>{props.text}</p>
    </div>
  )
}

export function MDFile(props: any) {
  return (
    <div className={props.divClassName} id={props.divID}>
      <MDIcon />
      <p className={props.pClassName}>{props.text}</p>
    </div>
  )
}

export function GUIFile(props: any) {
  function Icon() {
    switch (props.type) {
      case 'bomb': return <BOMBNode />;
      case 'shortest-path': return <SHORTESTPATHNode />;
      case 'wall': return <WALLNode />;
      case 'visited': return <VISITEDNode />;
      case 'unvisited': return <UNVISITEDNode />;
      case 'start-node': return <STARTNode />;
      case 'end-node': return <ENDNode />;
      case 'weight': return <WEIGHTNode />;
    }
  }
  return (
    <div className={props.divClassName} id={props.divID}>
      <Icon />
      <p className={props.pClassName}>{props.text}</p>
    </div>
  )
}

