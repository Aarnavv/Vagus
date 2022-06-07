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
        if (i === pathIDs.length)
            currentState.changeRun();
    }, 50 * updateSpeed());
};
export const updateVisitedNodes = (visitedID1, visitedID2, pathIDs, bomb, i) => {
    if (currentState.run() === false || i > visitedID1.length)
        return;
    setTimeout(() => {
        if (!bomb) {
            let [svgID, propsID] = util_extractIDs(visitedID1, i);
            if (!document.getElementById(svgID).classList.contains('svg-path-node')) {
                document.getElementById(svgID).classList.remove('no-node', 'icon');
                document.getElementById(svgID).classList.add('svg-visited-node');
                document.getElementById(propsID).classList.remove('no-node');
                document.getElementById(propsID).classList.add('visited-node');
                if (document.getElementById(propsID).classList.contains('weight-node'))
                    nodeHoverAnimation(propsID);
                if (++i < visitedID1.length)
                    updateVisitedNodes(visitedID1, visitedID1, pathIDs, false, i);
                else if (pathIDs === null || pathIDs.length === 0) {
                    alert("No Path Found! :(");
                    return;
                }
                else if (i === visitedID1.length)
                    updatePathNodes(pathIDs, 0);
            }
        }
        else {
            let [svgID, propsID] = util_extractIDs(visitedID1, i);
            if (!document.getElementById(svgID).classList.contains('svg-path-node')) {
                document.getElementById(svgID).classList.remove('no-node', 'icon');
                document.getElementById(svgID).classList.add('svg-visited-node');
                document.getElementById(propsID).classList.remove('no-node');
                document.getElementById(propsID).classList.add('visited-node');
                if (document.getElementById(propsID).classList.contains('weight-node'))
                    nodeHoverAnimation(propsID);
                if (++i < visitedID1.length)
                    updateVisitedNodes(visitedID1, visitedID2, pathIDs, true, i);
                else if (pathIDs === null || pathIDs.length === 0) {
                    alert("No Path Found! :(");
                    return;
                }
                else if (i === visitedID1.length)
                    updateBombNode(visitedID2, pathIDs, 0);
            }
        }
    }, 1 * updateSpeed());
};
// const checkBombNodePresence = (visitedID1): boolean => {
//   console.log(visitedID1, currentState.bombNode())
//   if (!(visitedID1.forEach((node) => { if (node === currentState.bombNode()) return false })))
//     return false
//   return true;
// }
export const updateBiDirectionalVisitedNodes = (visitedIDs, pathIDs, waitOrNoWait, i) => {
    if (currentState.run() === false || i > visitedIDs.length)
        return;
    setTimeout(() => {
        let [svgID, propsID] = util_extractIDs(visitedIDs, i);
        if (!document.getElementById(svgID).classList.contains('svg-path-node')) {
            document.getElementById(svgID).classList.remove('no-node', 'icon');
            document.getElementById(svgID).classList.add('svg-visited-node');
            document.getElementById(propsID).classList.remove('no-node');
            document.getElementById(propsID).classList.add('visited-node');
            if (document.getElementById(propsID).classList.contains('weight-node'))
                nodeHoverAnimation(propsID);
            if (++i < visitedIDs.length)
                updateBiDirectionalVisitedNodes(visitedIDs, pathIDs, waitOrNoWait, i);
            else if (pathIDs === null && waitOrNoWait) {
                alert("No Path Found! :(");
                return;
            }
            else if (i === visitedIDs.length && waitOrNoWait)
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
            document.getElementById(svgID).classList.remove('no-node', 'icon');
            document.getElementById(svgID).classList.add('svg-visited-node-bomb');
            document.getElementById(propsID).classList.remove('no-node');
            document.getElementById(propsID).classList.add('visited-node-bomb');
            if (document.getElementById(propsID).classList.contains('weight-node'))
                nodeHoverAnimation(propsID);
            if (++i < visitedID2.length)
                updateBombNode(visitedID2, pathIDs, i);
            else if (pathIDs === null || pathIDs.length === 0) {
                alert("No Path Found! :(");
                return;
            }
            else if (i === visitedID2.length)
                updatePathNodes(pathIDs, 0);
        }
    }, 1 * updateSpeed());
};
export const unUpdateNodes = (pathIDs, i, outerTime, innerTime, classToRemove, classToAdd, longer) => {
    if (currentState.run() === true)
        return;
    if (pathIDs === null || pathIDs.length === 0)
        return;
    setTimeout(() => {
        let id = pathIDs[i];
        let svgID = `svg-${id}`;
        let propsID = `props-${id}`;
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
