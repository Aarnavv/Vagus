export const updateIDClass = (id, classesRM, classesADD) => {
    document.getElementById(id).classList.remove(...classesRM);
    document.getElementById(id).classList.add(...classesADD);
};
export const updateBiIDClass = (id, classToRM, classToAdd) => {
    updateIDClass(`props-${id}`, [classToRM], [classToAdd]);
    updateIDClass(`svg-${id}`, [classToRM], [`svg-${classToAdd}`]);
};
