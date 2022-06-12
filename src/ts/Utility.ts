export const updateIDClass = (id: string, classesRM: string[], classesADD: string[]): void => {
  document.getElementById(id).classList.remove(...classesRM);
  document.getElementById(id).classList.add(...classesADD);
}

export const updateBiIDClass = (id: number, classToRM: string, classToAdd: string): void => {
  updateIDClass(`props-${id}`, [classToRM], [classToAdd]);
  updateIDClass(`svg-${id}`, [classToRM], [`svg-${classToAdd}`]);
}