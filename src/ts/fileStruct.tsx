import React, { useState } from 'react';
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

const setColor = (divClass: string, id: string, value: string) => {
    var files = document.querySelectorAll(divClass);
    for (var i = 0; i < files.length; i++) {
        var ele = files[i] as HTMLElement;
        ele.style.backgroundColor = "#21252B";
        ele.style.border = "";
        ele.style.color = "#ffffff";
    }
    document.getElementById(id).style.backgroundColor = "#4b4e55";
    document.getElementById(id).style.border = "1px solid #0062a8";
    document.getElementById(id).style.color = value;
}

export function TSXFile(props: any) {
    return (
        <div className={props.divClassName} id={props.divID} onClick={() => setColor('.tsx-file', props.divID, "#D5756C")}>
            <TSXIcon />
            <p className={props.pClassName}>{props.text}</p>
        </div>
    )
}

export function IOFile(props: any) {
    return (
        <div className={props.divClassName} id={props.divID} onClick={() => setColor('.io-file', props.divID, "#67BBFF")}>
            <IOIcon />
            <p className={props.pClassName}>{props.text}</p>
        </div>
    )
}

export function BATFile(props: any) {
    return (
        <div className={props.divClassName} id={props.divID} onClick={() => setColor('.bat-file', props.divID, "#4CAF50")}>
            <BATIcon />
            <p className={props.pClassName}>{props.text}</p>
        </div>
    )
}

export function SYSFile(props: any) {
    return (
        <div className={props.divClassName} id={props.divID} onClick={() => setColor('.sys-file', props.divID, "#E5C07B")}>
            <SYSIcon />
            <p className={props.pClassName}>{props.text}</p>
        </div>
    )
}

export function MDFile(props: any) {
    return (
        <div className={props.divClassName} id={props.divID} onClick={() => setColor('.md-file', props.divID, "#E5C07B")}>
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
            default: return <p>bee-woop the algorithm has failed you :|</p>;
        }
    }
    return (
        <div className={props.divClassName} id={props.divID} onClick={() => setColor('.gui-file', props.divID, "#EF5350")}>
            <Icon />
            <p className={props.pClassName}>{props.text}</p>
        </div>
    )
}

