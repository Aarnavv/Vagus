import { currentAddableNode } from './GlobalState';
import { updateState } from './fileStruct';
const UpdateHexIcon = (propID) => {
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
            if (document.getElementById(propID).classList.contains('bomb-node'))
                removeOnClick(propID, 'bomb-node');
            else
                updateNode(propID, 'bomb-node');
            break;
        case 'weight-node':
        case 'wall-node':
        default:
            return;
    }
};
const updateNode = (propID, node) => {
    if (document.getElementById(propID).classList.contains('no-node')) {
        let files = document.querySelectorAll(`.${node}`);
        for (let i = 0; i < files.length; i++) {
            const ele = files[i];
            ele.classList.remove(node);
            ele.classList.add('no-node');
        }
        document.getElementById(propID).classList.remove('no-node');
        document.getElementById(propID).classList.add(node);
    }
};
const updateStateOnClick = (node, fileClass, fileID, fileName) => {
    let ele = document.querySelector(`.${node}`);
    ele.addEventListener('click', () => {
        updateState(fileClass, fileID, fileName);
    });
};
const removeOnClick = (propID, nodeClass) => {
    document.getElementById(propID).classList.remove(nodeClass);
    document.getElementById(propID).classList.add('no-node');
};
export { UpdateHexIcon };
