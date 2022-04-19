import currentState from './GlobalState';
import { updateState } from './fileStruct';
import Graph from "./Graph";
const updateHexIcon = (propID, id) => {
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
};
const multiNodeUpdate = (propID, node, toRemove) => {
    document.onmousemove = null;
    document.onmousedown = null;
    if (document.getElementById(propID).classList.contains('no-node')) {
        document.getElementById(propID).classList.remove('no-node');
        document.getElementById(propID).classList.add(node);
        multiNodeGraphUpdate(node, Number(propID.substring(propID.lastIndexOf('-') + 1)), 10, false);
        let svgID = propID.replace('props', 'svg');
        toRemove.forEach(element => document.getElementById(svgID).classList.remove(element));
        document.getElementById(svgID).classList.add(`svg-${node}`);
        document.onmousedown = () => {
            document.onmousemove = (e) => {
                if (e.buttons === 1) {
                    let svg = e.target;
                    if (svg.id.startsWith('svg')) {
                        let SVG_ID = svg.id;
                        let HoverPropsID = svg.id.replace('svg', 'props');
                        if (document.getElementById(HoverPropsID).classList.contains('no-node')) {
                            toRemove.forEach(element => document.getElementById(SVG_ID).classList.remove(element));
                            document.getElementById(SVG_ID).classList.add(`svg-${node}`);
                            document.getElementById(HoverPropsID).classList.remove('no-node');
                            document.getElementById(HoverPropsID).classList.add(node);
                            multiNodeGraphUpdate(node, Number(HoverPropsID.substring(HoverPropsID.lastIndexOf('-') + 1)), 10, false);
                        }
                        nodeHoverAnimation(HoverPropsID);
                    }
                }
            };
        };
    }
};
const updateNode = (propID, node) => {
    let svgID = propID.replace('props', 'svg');
    if (document.getElementById(propID).classList.contains('no-node')) {
        let files = document.querySelectorAll(`.${node}`);
        let svgFiles = document.querySelectorAll(`.svg-${node}`);
        for (let i = 0; i < files.length; i++) {
            const ele = files[i];
            ele.classList.remove(node);
            ele.classList.add('no-node');
            const svgEle = svgFiles[i];
            svgEle.classList.remove(`svg-${node}`);
            svgEle.classList.add('no-node');
        }
        document.getElementById(propID).classList.remove('no-node');
        document.getElementById(propID).classList.add(node);
        document.getElementById(svgID).classList.remove('no-node');
        document.getElementById(svgID).classList.add(`svg-${node}`);
    }
};
const multiNodeGraphUpdate = (node, id, cost, add) => {
    if (node === 'weight-node') {
        currentState.graph().updateCostOfIncoming(id, cost);
    }
    else if (node === 'wall-node') {
        if (add)
            Graph.revertNode(id, currentState.initGraph(), currentState.graph());
        else
            currentState.graph().rmNode(id);
    }
};
const updateStateOnClick = (propID) => {
    document.onmousemove = null;
    document.onmousedown = null;
    let ele = document.getElementById(propID);
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
};
const removeOnClick = (propID, nodeClass, id) => {
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
};
const nodeHoverAnimation = (propID) => {
    let files = document.querySelectorAll('.node-hover');
    for (let i = 0; i < files.length; i++) {
        const ele = files[i];
        ele.classList.remove('node-hover');
    }
    files = document.querySelectorAll(`#${propID}`);
    for (let i = 0; i < files.length; i++) {
        const ele = files[i];
        ele.classList.add('node-hover');
    }
};
export { updateHexIcon, nodeHoverAnimation, };
