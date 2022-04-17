import { nodeHoverAnimation } from "./HexBoardUpdate";
import currentState from "./GlobalState";
let i1 = 0;
let i2 = 0;
let i3 = 0;
export const updatePathNodes = (pathIDs) => {
    setTimeout(() => {
        let id = pathIDs[i1];
        let svgID = `svg-${id}`;
        let propsID = `props-${id}`;
        document.getElementById(svgID).classList.remove('no-node', 'icon', 'svg-visited-node', 'svg-visited-node-bomb');
        document.getElementById(svgID).classList.add('svg-path-node');
        document.getElementById(propsID).classList.remove('no-node', 'visited-node', 'visited-node-bomb');
        document.getElementById(propsID).classList.add('path-node');
        i1++;
        if (i1 < pathIDs.length) {
            updatePathNodes(pathIDs);
        }
    }, 50 * updateSpeed());
};
export const updateVisitedNodes = (visitedID1, visitedID2, pathIDs, bomb) => {
    setTimeout(() => {
        if (!bomb) {
            let id = visitedID1[i2];
            let svgID = `svg-${id}`;
            let propsID = `props-${id}`;
            if (!document.getElementById(svgID).classList.contains('svg-path-node')) {
                document.getElementById(svgID).classList.remove('no-node', 'icon');
                document.getElementById(svgID).classList.add('svg-visited-node');
                document.getElementById(propsID).classList.remove('no-node');
                document.getElementById(propsID).classList.add('visited-node');
                if (document.getElementById(propsID).classList.contains('weight-node'))
                    nodeHoverAnimation(propsID);
                i2++;
                if (i2 < visitedID1.length)
                    updateVisitedNodes(visitedID1, visitedID1, pathIDs, false);
                else if (i2 === visitedID1.length)
                    updatePathNodes(pathIDs);
            }
        }
        else {
            let id1 = visitedID1[i2];
            let svgID = `svg-${id1}`;
            let propsID = `props-${id1}`;
            if (!document.getElementById(svgID).classList.contains('svg-path-node')) {
                document.getElementById(svgID).classList.remove('no-node', 'icon');
                document.getElementById(svgID).classList.add('svg-visited-node');
                document.getElementById(propsID).classList.remove('no-node');
                document.getElementById(propsID).classList.add('visited-node');
                if (document.getElementById(propsID).classList.contains('weight-node'))
                    nodeHoverAnimation(propsID);
                i2++;
                if (i2 < visitedID1.length)
                    updateVisitedNodes(visitedID1, visitedID2, pathIDs, true);
                else if (i2 === visitedID1.length)
                    updateBombNode(visitedID2, pathIDs);
            }
        }
    }, updateSpeed());
};
const updateBombNode = (visitedID2, pathIDs) => {
    setTimeout(() => {
        let id2 = visitedID2[i3];
        let svgID = `svg-${id2}`;
        let propsID = `props-${id2}`;
        if (!document.getElementById(svgID).classList.contains('svg-path-node')) {
            document.getElementById(svgID).classList.remove('no-node', 'icon');
            document.getElementById(svgID).classList.add('svg-visited-node-bomb');
            document.getElementById(propsID).classList.remove('no-node');
            document.getElementById(propsID).classList.add('visited-node-bomb');
            if (document.getElementById(propsID).classList.contains('weight-node'))
                nodeHoverAnimation(propsID);
            i3++;
            if (i3 < visitedID2.length)
                updateBombNode(visitedID2, pathIDs);
            else if (i3 === visitedID2.length)
                updatePathNodes(pathIDs);
        }
    }, updateSpeed());
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
