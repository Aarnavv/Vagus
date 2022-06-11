import { nodeHoverAnimation } from "./HexBoardUpdate";
import currentState from "./GlobalState";
import { RemoveAllClasses } from './ActionButtonsFunctionality';
export const updatePathNodes = (pathIDs, pathToRemove, i) => {
    if (currentState.run() === false)
        return;
    setTimeout(() => {
        let id = pathIDs[i];
        pathToRemove.push(id);
        let svgID = `svg-${id}`;
        let propsID = `props-${id}`;
        document.getElementById(svgID).classList.remove('no-node', 'icon', 'svg-visited-node', 'svg-visited-node-bomb');
        document.getElementById(svgID).classList.add('svg-path-node');
        document.getElementById(propsID).classList.remove('no-node', 'visited-node', 'visited-node-bomb');
        document.getElementById(propsID).classList.add('path-node');
        if (++i < pathIDs.length) {
            updatePathNodes(pathIDs, pathToRemove, i);
        }
        if (i === pathIDs.length)
            currentState.changeRun();
    }, 50 * updateSpeed());
};
// BUG
export const updateVisitedNodes = (visitedID1, visitedID2, pathIDs, visitedToRemove, visitedToRemoveBomb, pathToRemove, bomb, i) => {
    if (currentState.run() === false)
        return;
    setTimeout(() => {
        if (!bomb) {
            let id = visitedID1[i];
            visitedToRemove.push(id);
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
                    updateVisitedNodes(visitedID1, visitedID1, pathIDs, visitedToRemove, visitedToRemoveBomb, pathToRemove, false, i);
                // FIXME
                else if (pathIDs === null || pathIDs.length === 0) {
                    alert("No Path Found! :(");
                    return;
                }
                else if (i === visitedID1.length)
                    updatePathNodes(pathIDs, pathToRemove, 0);
            }
        }
        else {
            let id1 = visitedID1[i];
            visitedToRemove.push(id1);
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
                    updateVisitedNodes(visitedID1, visitedID2, pathIDs, visitedToRemove, visitedToRemoveBomb, pathToRemove, true, i);
                else if (pathIDs === null || pathIDs.length === 0) {
                    alert("No Path Found! :(");
                    return;
                }
                else if (i === visitedID1.length)
                    updateBombNode(visitedID2, pathIDs, visitedToRemoveBomb, pathToRemove, 0);
            }
        }
    }, 1 * updateSpeed());
};
export const updateBiDirectionalVisitedNodes = (visitedIDs, pathIDs, visitedToRemove, pathToRemove, waitOrNoWait, i) => {
    if (currentState.run() === false)
        return;
    setTimeout(() => {
        let id = visitedIDs[i];
        visitedToRemove.push(id);
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
                updateBiDirectionalVisitedNodes(visitedIDs, pathIDs, visitedToRemove, pathToRemove, waitOrNoWait, i);
            else if (pathIDs === null && waitOrNoWait) {
                alert("No Path Found! :(");
                return;
            }
            else if (i === visitedIDs.length && waitOrNoWait)
                updatePathNodes(pathIDs, pathToRemove, 0);
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
const updateBombNode = (visitedID2, pathIDs, visitedToRemoveBomb, pathToRemove, i) => {
    if (currentState.run() === false)
        return;
    setTimeout(() => {
        let id2 = visitedID2[i];
        visitedToRemoveBomb.push(id2);
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
                updateBombNode(visitedID2, pathIDs, visitedToRemoveBomb, pathToRemove, i);
            else if (pathIDs === null || pathIDs.length === 0) {
                alert("No Path Found! :(");
                return;
            }
            else if (i === visitedID2.length)
                updatePathNodes(pathIDs, pathToRemove, 0);
        }
    }, 1 * updateSpeed());
};
export const unUpdateNodes = (classToRemove, classToAdd) => {
    if (currentState.run() === true)
        return;
    let pathsSVG = document.querySelectorAll(`.svg-${classToRemove}`);
    for (let i = 0; i < pathsSVG.length; i++) {
        const ele = pathsSVG[i];
        ele.classList.remove('icon', `svg-${classToRemove}`);
        ele.classList.add(`svg-${classToAdd}`);
    }
    let paths = document.querySelectorAll(`.${classToRemove}`);
    for (let i = 0; i < paths.length; i++) {
        const ele = paths[i];
        ele.classList.remove(classToRemove);
        ele.classList.add(classToAdd);
    }
    setTimeout(() => { renewNodes(classToAdd); }, 1100);
};
const renewNodes = (classToRemove) => {
    if (currentState.run() === true)
        return;
    let pathsSVG = document.querySelectorAll(`.svg-${classToRemove}`);
    for (let i = 0; i < pathsSVG.length; i++) {
        const ele = pathsSVG[i];
        ele.classList.remove('icon', `svg-${classToRemove}`);
        ele.classList.add('icon', 'no-node');
    }
    let paths = document.querySelectorAll(`.${classToRemove}`);
    for (let i = 0; i < paths.length; i++) {
        const ele = paths[i];
        ele.classList.remove(classToRemove);
        ele.classList.add('no-node');
    }
    RemoveAllClasses(1, []);
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
