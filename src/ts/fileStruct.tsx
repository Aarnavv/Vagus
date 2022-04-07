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


export function TSXFile(props: any) {
    return (
        <div className={props.divClassName} style={props.style}>
            <TSXIcon />
            <p className={props.pClassName}>{props.text}</p>
        </div>
    )
}

export function IOFile(props: any) {
    return (
        <div className={props.divClassName}>
            <IOIcon />
            <p className={props.pClassName}>{props.text}</p>
        </div>
    )
}

export function BATFile(props: any) {
    return (
        <div className={props.divClassName}>
            <BATIcon />
            <p className={props.pClassName}>{props.text}</p>
        </div>
    )
}

export function SYSFile(props: any) {
    return (
        <div className={props.divClassName}>
            <SYSIcon />
            <p className={props.pClassName}>{props.text}</p>
        </div>
    )
}

export function MDFile(props: any) {
    return (
        <div className={props.divClassName}>
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
        <div className={props.divClassName}>
            <Icon />
            <p className={props.pClassName}>{props.text}</p>
        </div>
    )
}

