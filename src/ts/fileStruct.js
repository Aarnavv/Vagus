import React from 'react';
import '../css/navbar.css';
import { TSXIcon, IOIcon, BATIcon, SYSIcon, MDIcon, BOMBNode, SHORTESTPATHNode, VISITEDNode, WALLNode, UNVISITEDNode, STARTNode, ENDNode, WEIGHTNode } from "../svgIcons/fileSVGIconComponent";
import { changeAddableNode, changeAlgorithm, changeMaze, changeSpeed } from "./GlobalState";
const setColor = (divClass, id, text) => {
    var files = document.querySelectorAll(divClass);
    for (var i = 0; i < files.length; i++) {
        var ele = files[i];
        ele.style.backgroundColor = "#21252B";
        ele.style.borderInline = "";
    }
    document.getElementById(id).style.backgroundColor = "#4b4e5578";
    document.getElementById(id).style.borderInline = "1px solid #4b4e55";
    var ext = text.substring(text.lastIndexOf(".") + 1);
    text = text.substring(0, text.lastIndexOf("."));
    switch (ext) {
        case "tsx":
            changeAlgorithm(text);
            break;
        case "io":
            changeAddableNode(text);
            break;
        case "bat":
            changeMaze(text);
            break;
        case "sys":
            changeSpeed(text);
            break;
    }
};
export function TSXFile(props) {
    return (React.createElement("div", { className: props.divClassName, id: props.divID, onClick: () => setColor('.tsx-file', props.divID, props.text) },
        React.createElement(TSXIcon, null),
        React.createElement("p", { className: props.pClassName }, props.text)));
}
export function IOFile(props) {
    return (React.createElement("div", { className: props.divClassName, id: props.divID, onClick: () => setColor('.io-file', props.divID, props.text) },
        React.createElement(IOIcon, null),
        React.createElement("p", { className: props.pClassName }, props.text)));
}
export function BATFile(props) {
    return (React.createElement("div", { className: props.divClassName, id: props.divID, onClick: () => setColor('.bat-file', props.divID, props.text) },
        React.createElement(BATIcon, null),
        React.createElement("p", { className: props.pClassName }, props.text)));
}
export function SYSFile(props) {
    return (React.createElement("div", { className: props.divClassName, id: props.divID, onClick: () => setColor('.sys-file', props.divID, props.text) },
        React.createElement(SYSIcon, null),
        React.createElement("p", { className: props.pClassName }, props.text)));
}
export function MDFile(props) {
    return (React.createElement("div", { className: props.divClassName, id: props.divID },
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
    return (React.createElement("div", { className: props.divClassName, id: props.divID },
        React.createElement(Icon, null),
        React.createElement("p", { className: props.pClassName }, props.text)));
}
