import { nodeHoverAnimation } from "./HexBoardUpdate";
import currentState from "./GlobalState";

export const updatePathNodes = (pathIDs: number[], i: number): void => {
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
  }, 50 * updateSpeed())
}

export const updateVisitedNodes = (visitedID1: number[], visitedID2: number[], pathIDs: number[], bomb: boolean, i: number): void => {
  setTimeout(() => {
    if (!bomb) {
      let id = visitedID1[i];
      let svgID = `svg-${id}`;
      let propsID = `props-${id}`;
      if (!document.getElementById(svgID).classList.contains('svg-path-node')) {
        document.getElementById(svgID).classList.remove('no-node', 'icon')
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
        document.getElementById(svgID).classList.remove('no-node', 'icon')
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
  }, updateSpeed())
}

export const updateBiDirectionalVisitedNodes = (visitedIDs: number[], pathIDs: number[], waitOrNoWait: boolean, i: number) => {
  setTimeout(() => {
    let id = visitedIDs[i];
    let svgID = `svg-${id}`;
    let propsID = `props-${id}`;
    if (!document.getElementById(svgID).classList.contains('svg-path-node')) {
      document.getElementById(svgID).classList.remove('no-node', 'icon')
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
  }, updateSpeed())
}

const updateBombNode = (visitedID2: number[], pathIDs: number[], i) => {
  setTimeout(() => {
    let id2 = visitedID2[i];
    let svgID = `svg-${id2}`;
    let propsID = `props-${id2}`;
    if (!document.getElementById(svgID).classList.contains('svg-path-node')) {
      document.getElementById(svgID).classList.remove('no-node', 'icon')
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
  }, updateSpeed())
}

const updateSpeed = (): number => {
  switch (currentState.speed()) {
    case 100:
      return 1;
    case 50:
      return 2;
    case 25:
      return 4;
  }
}