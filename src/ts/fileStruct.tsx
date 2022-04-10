import React from 'react';
import '../css/navbar.css';
import {
    TSXIcon,
    IOIcon,
    BATIcon,
    SYSIcon,
    MDIcon,
    BOMBNode,
    SHORTESTPATHNode,
    VISITEDNode,
    WALLNode,
    UNVISITEDNode,
    STARTNode, ENDNode, WEIGHTNode
} from "../svgIcons/fileSVGIconComponent";
import {
    changeAddableNode,
    changeAlgorithm,
    changeMaze,
    changeSpeed,
} from "./GlobalState";

const setColor = (divClass: string, id: string, text) => {
    const files = document.querySelectorAll(divClass);
    for (let i = 0; i < files.length; i++) {
        const ele = files[i] as HTMLElement;
        ele.style.backgroundColor = "#21252B";
        ele.style.borderLeft = "";
    }
    document.getElementById(id).style.backgroundColor = "#4b4e5578";
    document.getElementById(id).style.borderLeft = "2.5px solid #67bbff";

    const ext: string = text.substring(text.lastIndexOf(".") + 1);
    text = text.substring(0, text.lastIndexOf("."));
    console.log(text);
    switch (ext) {
        case "tsx":changeAlgorithm(text);break;
        case "io":changeAddableNode(text);break;
        case "bat":changeMaze(text);break;
        case "sys":changeSpeed(text);break;
    }
}

export function TSXFile(props: any) {
    return (
        <div className={props.divClassName} id={props.divID} onClick={() => setColor('.tsx-file', props.divID, props.text)}>
            <TSXIcon />
            <p className={props.pClassName}>{props.text}</p>
        </div>
    )
}

export function IOFile(props: any) {
    return (
        <div className={props.divClassName} id={props.divID} onClick={() => setColor('.io-file', props.divID, props.text)}>
            <IOIcon />
            <p className={props.pClassName}>{props.text}</p>
        </div>
    )
}

export function BATFile(props: any) {
    return (
        <div className={props.divClassName} id={props.divID} onClick={() => setColor('.bat-file', props.divID, props.text)}>
            <BATIcon />
            <p className={props.pClassName}>{props.text}</p>
        </div>
    )
}

export function SYSFile(props: any) {
    return (
        <div className={props.divClassName} id={props.divID} onClick={() => setColor('.sys-file', props.divID, props.text)}>
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

