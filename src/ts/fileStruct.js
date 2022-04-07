import React from 'react';
import '../css/navbar.css';
import { TSXIcon, IOIcon, BATIcon, SYSIcon, MDIcon, BOMBNode, SHORTESTPATHNode, VISITEDNode, WALLNode, UNVISITEDNode, STARTNode, ENDNode, WEIGHTNode } from "../svgIcons/fileSVGIconComponent";
export function TSXFile(props) {
    return (React.createElement("div", { className: props.divClassName, style: props.style },
        React.createElement(TSXIcon, null),
        React.createElement("p", { className: props.pClassName }, props.text)));
}
export function IOFile(props) {
    return (React.createElement("div", { className: props.divClassName },
        React.createElement(IOIcon, null),
        React.createElement("p", { className: props.pClassName }, props.text)));
}
export function BATFile(props) {
    return (React.createElement("div", { className: props.divClassName },
        React.createElement(BATIcon, null),
        React.createElement("p", { className: props.pClassName }, props.text)));
}
export function SYSFile(props) {
    return (React.createElement("div", { className: props.divClassName },
        React.createElement(SYSIcon, null),
        React.createElement("p", { className: props.pClassName }, props.text)));
}
export function MDFile(props) {
    return (React.createElement("div", { className: props.divClassName },
        React.createElement(MDIcon, null),
        React.createElement("p", { className: props.pClassName }, props.text)));
}
export function GUIFile(props) {
    function Icon() {
        switch (props.type) {
            case 'bomb': return React.createElement(BOMBNode, null);
            case 'shortest-path': return React.createElement(SHORTESTPATHNode, null);
            case 'wall': return React.createElement(WALLNode, null);
            case 'visited': return React.createElement(VISITEDNode, null);
            case 'unvisited': return React.createElement(UNVISITEDNode, null);
            case 'start-node': return React.createElement(STARTNode, null);
            case 'end-node': return React.createElement(ENDNode, null);
            case 'weight': return React.createElement(WEIGHTNode, null);
            default: return React.createElement("p", null, "bee-woop the algorithm has failed you :|");
        }
    }
    return (React.createElement("div", { className: props.divClassName },
        React.createElement(Icon, null),
        React.createElement("p", { className: props.pClassName }, props.text)));
}
