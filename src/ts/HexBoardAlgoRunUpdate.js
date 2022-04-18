import { nodeHoverAnimation } from "./HexBoardUpdate";
import currentState from "./GlobalState";
import { RemoveAllClasses } from './ActionButtonsFunctionality';
export const updatePathNodes = (pathIDs, i) => {
    if (currentState.run() === false)
        return;
    setTimeout(() => {
        let id = pathIDs[i];
        let svgID = `svg-${id}`;
        let propsID = `props-${id}`;
        document.getElementById(svgID).classList.remove('no-node', 'icon', 'svg-visited-node', 'svg-visited-node-bomb');
        document.getElementById(svgID).classList.add('svg-path-node');
        document.getElementById(propsID).classList.remove('no-node', 'visited-node', 'visited-node-bomb');
        document.getElementById(propsID).classList.add('path-node');
        if (++i < pathIDs.length) {
            updatePathNodes(pathIDs, i);
        }
    }, 50 * updateSpeed());
};
export const updateVisitedNodes = (visitedID1, visitedID2, pathIDs, bomb, i) => {
    if (currentState.run() === false)
        return;
    setTimeout(() => {
        if (!bomb) {
            let id = visitedID1[i];
            let svgID = `svg-${id}`;
            let propsID = `props-${id}`;
            if (!document.getElementById(svgID).classList.contains('svg-path-node')) {
                document.getElementById(svgID).classList.remove('no-node', 'icon');
                document.getElementById(svgID).classList.add('svg-visited-node');
                document.getElementById(propsID).classList.remove('no-node');
                document.getElementById(propsID).classList.add('visited-node');
                if (document.getElementById(propsID).classList.contains('weight-node'))
                    nodeHoverAnimation(propsID);
                if (++i < visitedID1.length)
                    updateVisitedNodes(visitedID1, visitedID1, pathIDs, false, i);
                else if (i === visitedID1.length)
                    updatePathNodes(pathIDs, 0);
            }
        }
        else {
            let id1 = visitedID1[i];
            let svgID = `svg-${id1}`;
            let propsID = `props-${id1}`;
            if (!document.getElementById(svgID).classList.contains('svg-path-node')) {
                document.getElementById(svgID).classList.remove('no-node', 'icon');
                document.getElementById(svgID).classList.add('svg-visited-node');
                document.getElementById(propsID).classList.remove('no-node');
                document.getElementById(propsID).classList.add('visited-node');
                if (document.getElementById(propsID).classList.contains('weight-node'))
                    nodeHoverAnimation(propsID);
                if (++i < visitedID1.length)
                    updateVisitedNodes(visitedID1, visitedID2, pathIDs, true, i);
                else if (i === visitedID1.length)
                    updateBombNode(visitedID2, pathIDs, 0);
            }
        }
    }, 1 * updateSpeed());
};
export const updateBiDirectionalVisitedNodes = (visitedIDs, pathIDs, waitOrNoWait, i) => {
    if (currentState.run() === false)
        return;
    setTimeout(() => {
        let id = visitedIDs[i];
        let svgID = `svg-${id}`;
        let propsID = `props-${id}`;
        if (!document.getElementById(svgID).classList.contains('svg-path-node')) {
            document.getElementById(svgID).classList.remove('no-node', 'icon');
            document.getElementById(svgID).classList.add('svg-visited-node');
            document.getElementById(propsID).classList.remove('no-node');
            document.getElementById(propsID).classList.add('visited-node');
            if (document.getElementById(propsID).classList.contains('weight-node'))
                nodeHoverAnimation(propsID);
            if (++i < visitedIDs.length)
                updateBiDirectionalVisitedNodes(visitedIDs, pathIDs, waitOrNoWait, i);
            else if (i === visitedIDs.length && waitOrNoWait)
                updatePathNodes(pathIDs, 0);
        }
    }, 1 * updateSpeed());
};
export const updateRandomVisitedNodes = (pathID) => {
    if (currentState.run() === false)
        return;
    setTimeout(() => {
        let svgID = `svg-${pathID}`;
        let propsID = `props-${pathID}`;
        if (document.getElementById(svgID).classList.contains('svg-path-node')) {
            document.getElementById(svgID).classList.remove('svg-path-node');
            document.getElementById(propsID).classList.remove('path-node');
            document.getElementById(svgID).classList.add('svg-visited-node-bomb');
            document.getElementById(propsID).classList.add('visited-node-bomb');
            updateRandomVisitedNodes(pathID);
            return;
        }
        document.getElementById(svgID).classList.remove('no-node', 'icon', 'svg-visited-node', 'svg-visited-node-bomb');
        document.getElementById(propsID).classList.remove('no-node', 'visited-node', 'visited-node-bomb');
        document.getElementById(svgID).classList.add('svg-path-node');
        document.getElementById(propsID).classList.add('path-node');
    }, 50 * updateSpeed());
};
const updateBombNode = (visitedID2, pathIDs, i) => {
    if (currentState.run() === false)
        return;
    setTimeout(() => {
        let id2 = visitedID2[i];
        let svgID = `svg-${id2}`;
        let propsID = `props-${id2}`;
        if (!document.getElementById(svgID).classList.contains('svg-path-node')) {
            document.getElementById(svgID).classList.remove('no-node', 'icon');
            document.getElementById(svgID).classList.add('svg-visited-node-bomb');
            document.getElementById(propsID).classList.remove('no-node');
            document.getElementById(propsID).classList.add('visited-node-bomb');
            if (document.getElementById(propsID).classList.contains('weight-node'))
                nodeHoverAnimation(propsID);
            if (++i < visitedID2.length)
                updateBombNode(visitedID2, pathIDs, i);
            else if (i === visitedID2.length)
                updatePathNodes(pathIDs, 0);
        }
    }, 1 * updateSpeed());
};
export const unUpdateNodes = (pathIDs, i, outerTime, innerTime, classToRemove, classToAdd, longer) => {
    if (currentState.run() === true)
        return;
    setTimeout(() => {
        let id = pathIDs[i];
        let svgID = `svg-${id}`;
        let propsID = `props-${id}`;
        if (!(document.getElementById(svgID) === null)) {
            document.getElementById(svgID).classList.remove('icon', `svg-${classToRemove}`);
            document.getElementById(propsID).classList.remove(classToRemove);
            document.getElementById(svgID).classList.add(`svg-${classToAdd}`);
            document.getElementById(propsID).classList.add(classToAdd);
        }
        setTimeout(() => { renewNodes(pathIDs, i, classToAdd, longer); }, innerTime);
        if (--i >= 0)
            unUpdateNodes(pathIDs, i, outerTime, innerTime, classToRemove, classToAdd, longer);
    }, outerTime);
};
const renewNodes = (pathIDs, i, classToRemove, removeAll) => {
    if (currentState.run() === true)
        return;
    let id = pathIDs[i];
    let svgID = `svg-${id}`;
    let propsID = `props-${id}`;
    if (!(document.getElementById(svgID) === null)) {
        document.getElementById(svgID).classList.remove(`svg-${classToRemove}`);
        document.getElementById(svgID).classList.add('icon', 'no-node');
        document.getElementById(propsID).classList.remove(classToRemove);
        document.getElementById(propsID).classList.add('no-node');
    }
    if (i === 0 && removeAll)
        RemoveAllClasses(1000, []);
};
const updateSpeed = () => {
    switch (currentState.speed()) {
        case 100:
            return 1;
        case 50:
            return 2;
        case 25:
            return 4;
    }
};
