import { nodeHoverAnimation } from "./HexBoardUpdate";
import currentState from "./GlobalState";
import { RemoveAllClasses } from './ActionButtonsFunctionality';
import { SpeedType } from "./Types";
//TODO i am done with understanding this file too, and cleaning it up as much as i could. No more redundant code imo.
function util_update(id, rm_tokens, add_tokens) {
    document.getElementById(id).classList.remove(...rm_tokens);
    document.getElementById(id).classList.add(...add_tokens);
}
function util_bombAnimationOnVisit(id) {
    if (document.getElementById(id).classList.contains('weight-node'))
        nodeHoverAnimation(id);
}
function util_extractIDs(pathIDs, i) {
    return [`svg-${pathIDs[i]}`, `props-${pathIDs[i]}`];
}
export const updatePathNodes = (pathIDs, i) => {
    if (currentState.run() === false || i == pathIDs.length)
        return;
    setTimeout(_ => {
        let [svgID, propsID] = util_extractIDs(pathIDs, i);
        util_update(svgID, ['no-node', 'icon', 'svg-visited-node', 'svg-visited-node-bomb'], ['svg-path-node']);
        util_update(propsID, ['no-node', 'visited-node', 'visited-node-bomb'], ['path-node']);
        updatePathNodes(pathIDs, ++i);
    }, 50 * updateSpeed());
};
export const updateVisitedNodes = (visitedID1, visitedID2, pathIDs, bomb, i) => {
    if (currentState.run() === false || i > visitedID1.length)
        return;
    setTimeout(() => {
        if (!bomb) {
            let [svgID, propsID] = util_extractIDs(visitedID1, i);
            if (!document.getElementById(svgID).classList.contains('svg-path-node')) {
                util_update(svgID, ['no-node', 'icon'], ['svg-visited-node']);
                util_update(propsID, ['no-node'], ['visited-node']);
                util_bombAnimationOnVisit(propsID);
                updateVisitedNodes(visitedID1, visitedID1, pathIDs, false, ++i);
                if (i === visitedID1.length)
                    updatePathNodes(pathIDs, 0);
            }
        }
        else {
            let [svgID, propsID] = util_extractIDs(visitedID1, i);
            if (!document.getElementById(svgID).classList.contains('svg-path-node')) {
                util_update(svgID, ['no-node', 'icon'], ['svg-visited-node']);
                util_update(propsID, ['no-node'], ['visited-node']);
                util_bombAnimationOnVisit(propsID);
                updateVisitedNodes(visitedID1, visitedID2, pathIDs, true, ++i);
                if (i === visitedID1.length)
                    updateBombNode(visitedID2, pathIDs, 0);
            }
        }
    }, 1 * updateSpeed());
};
export const updateBiDirectionalVisitedNodes = (visitedIDs, pathIDs, waitOrNoWait, i) => {
    if (currentState.run() === false || i > visitedIDs.length)
        return;
    setTimeout(() => {
        let [svgID, propsID] = util_extractIDs(visitedIDs, i);
        if (!document.getElementById(svgID).classList.contains('svg-path-node')) {
            util_update(svgID, ['no-node', 'icon'], ['svg-visited-node']);
            util_update(propsID, ['no-node'], ['visited-node']);
            util_bombAnimationOnVisit(propsID);
            updateBiDirectionalVisitedNodes(visitedIDs, pathIDs, waitOrNoWait, ++i);
            if (i === visitedIDs.length && waitOrNoWait)
                updatePathNodes(pathIDs, 0);
        }
    }, 1 * updateSpeed());
};
export const updateRandomVisitedNodes = (pathID) => {
    if (currentState.run() === false)
        return;
    setTimeout(_ => {
        let [svgID, propsID] = util_extractIDs([pathID], 0);
        if (document.getElementById(svgID).classList.contains('svg-path-node')) {
            util_update(svgID, ['svg-path-node'], ['svg-visited-node-bomb']);
            util_update(propsID, ['path-node'], ['visited-node-bomb']);
            updateRandomVisitedNodes(pathID);
            return;
        }
        util_update(svgID, ['no-node', 'icon', 'svg-visited-node', 'svg-visited-node-bomb'], ['svg-path-node']);
        util_update(propsID, ['no-node', 'visited-node', 'visited-node-bomb'], ['path-node']);
    }, 50 * updateSpeed());
};
const updateBombNode = (visitedID2, pathIDs, i) => {
    if (currentState.run() === false || i > visitedID2.length)
        return;
    setTimeout(() => {
        let [svgID, propsID] = util_extractIDs(visitedID2, i);
        if (!document.getElementById(svgID).classList.contains('svg-path-node')) {
            util_update(svgID, ['no-node', 'icon'], ['svg-visited-node-bomb']);
            util_update(propsID, ['no-node'], ['visited-node-bomb']);
            util_bombAnimationOnVisit(propsID);
            updateBombNode(visitedID2, pathIDs, ++i);
            if (i === visitedID2.length)
                updatePathNodes(pathIDs, 0);
        }
    }, 1 * updateSpeed());
};
export const unUpdateNodes = (pathIDs, i, outerTime, innerTime, classToRemove, classToAdd, longer) => {
    if (currentState.run() === true || i < 0)
        return;
    setTimeout(_ => {
        let [svgID, propsID] = util_extractIDs(pathIDs, i);
        if (!(document.getElementById(svgID) === null)) {
            util_update(svgID, ['icon', `svg-${classToRemove}`], [`svg-${classToAdd}`]);
            util_update(propsID, [classToRemove], [classToAdd]);
        }
        setTimeout(_ => renewNodes(pathIDs, i, classToAdd, longer), innerTime);
        unUpdateNodes(pathIDs, --i, outerTime, innerTime, classToRemove, classToAdd, longer);
    }, outerTime);
};
const renewNodes = (pathIDs, i, classToRemove, removeAll) => {
    if (currentState.run() === true)
        return;
    let [svgID, propsID] = util_extractIDs(pathIDs, i);
    if (!(document.getElementById(svgID) === null)) {
        util_update(svgID, [`svg-${classToRemove}`], ['icon', 'no-node']);
        util_update(propsID, [classToRemove], ['no-node']);
    }
    if (i === 0 && removeAll)
        RemoveAllClasses(1000, []);
};
const updateSpeed = () => {
    switch (currentState.speed()) {
        case SpeedType.percent100:
            return 1;
        case SpeedType.percent50:
            return 2;
        case SpeedType.percent25:
            return 4;
    }
};
