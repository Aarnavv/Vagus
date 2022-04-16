export const updatePathNodes = (pathIDs) => {
    for (let i = 0; i < pathIDs.length; i++) {
        let id = pathIDs[i];
        let svgID = `svg-${id}`;
        let propsID = `props-${id}`;
        document.getElementById(svgID).classList.remove('no-node', 'icon');
        document.getElementById(svgID).classList.add('svg-path-node');
        document.getElementById(propsID).classList.remove('no-node');
        document.getElementById(propsID).classList.add('path-node');
    }
};
export const updateVisitedNodes = (pathIDs) => {
    for (let i = 0; i < pathIDs.length; i++) {
        let id = pathIDs[i];
        let svgID = `svg-${id}`;
        let propsID = `props-${id}`;
        if (!document.getElementById(svgID).classList.contains('svg-path-node')) {
            document.getElementById(svgID).classList.remove('no-node', 'icon');
            document.getElementById(svgID).classList.add('svg-visited-node');
            document.getElementById(propsID).classList.remove('no-node');
            document.getElementById(propsID).classList.add('visited-node');
        }
    }
};
