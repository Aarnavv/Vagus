import currentState from "./GlobalState";
export const updateIDClass = (id, classesRM, classesADD) => {
    document.getElementById(id).classList.remove(...classesRM);
    document.getElementById(id).classList.add(...classesADD);
};
export const updateBiIDClass = (id, classToRM, classToAdd) => {
    updateIDClass(`props-${id}`, [...classToRM], [classToAdd]);
    updateIDClass(`svg-${id}`, [...classToRM], [`svg-${classToAdd}`]);
};
export const extractIDs = (rawID) => {
    return [`props-${rawID}`, `svg-${rawID}`];
};
export const addToGraphs = (source, destination) => {
    currentState.graph().addEdge(source, destination, 1);
    currentState.initGraph().addEdge(source, destination, 1);
};
